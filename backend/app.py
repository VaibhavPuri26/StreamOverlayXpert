from flask import Flask, send_from_directory
from flask_cors import CORS
from routes import overlay_blueprint  
import os

app = Flask(__name__)
CORS(app)  
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  


app.register_blueprint(overlay_blueprint)


UPLOAD_FOLDER = "./uploads"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(os.path.join(app.root_path, 'uploads'), filename)

if __name__ == "__main__":
    app.run()
