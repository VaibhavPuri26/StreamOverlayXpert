import os
from flask import Blueprint, request, jsonify
from bson import ObjectId  
from werkzeug.utils import secure_filename
from config import overlays_collection

overlay_blueprint = Blueprint('overlays', __name__)


UPLOAD_FOLDER = "./uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@overlay_blueprint.route('/overlay', methods=['POST'])
def create_overlay():
    text = request.form.get("text", "")
    position = request.form.get("position", "")
    image = request.files.get("image", None)
    image_path = ""

    if image:
        filename = secure_filename(image.filename)
        image_path = os.path.join(UPLOAD_FOLDER, filename)
        image.save(image_path)

    overlay = {
        "text": text,
        "position": position,
        "image": f"http://127.0.0.1:5000/uploads/{filename}" if image else None
    }

    result = overlays_collection.insert_one(overlay)
    return jsonify({
        'id': str(result.inserted_id),
        'message': 'Overlay created',
        'text': text,
        'position': position,
        'image': image_path
    }), 201


@overlay_blueprint.route('/overlay', methods=['GET'])
def read_overlays():
    overlays = list(overlays_collection.find({}, {'_id': 1, 'text': 1, 'position': 1, 'image': 1}))
    for overlay in overlays:
        overlay['_id'] = str(overlay['_id'])  
        if overlay.get('image'):
            overlay['image'] = f"http://127.0.0.1:5000/uploads/{os.path.basename(overlay['image'])}"
    return jsonify(overlays)


@overlay_blueprint.route('/overlay/<string:id>', methods=['PUT'])
def update_overlay(id):
    text = request.form.get("text", "")
    position = request.form.get("position", "")
    image = request.files.get("image", None)
    image_path = ""

    if image:
        filename = secure_filename(image.filename)
        image_path = os.path.join(UPLOAD_FOLDER, filename)
        image.save(image_path)
    
    update_data = {
        "text": text,
        "position": position,
    }
    if image:
        update_data["image"] = f"http://127.0.0.1:5000/uploads/{filename}"
    
    result = overlays_collection.update_one({'_id': ObjectId(id)}, {'$set': update_data})
    
    if result.matched_count:
        return jsonify({'message': 'Overlay updated', 'id': id}), 200
    return jsonify({'error': 'Overlay not found'}), 404


@overlay_blueprint.route('/overlay/<string:id>', methods=['DELETE'])
def delete_overlay(id):
    result = overlays_collection.delete_one({'_id': ObjectId(id)})
    if result.deleted_count:
        return jsonify({'message': 'Overlay deleted'}), 200
    return jsonify({'error': 'Overlay not found'}), 404
