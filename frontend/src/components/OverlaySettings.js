import React, { useState } from "react";
import axios from "axios";
import "../css/OverlaySettings.css";

const OverlaySettings = ({ overlays, setOverlays }) => {
  const [overlay, setOverlay] = useState({
    text: "",
    position: "",
    image: null,
  });

  const handleCreate = async () => {
    if ((overlay.text || overlay.image) && overlay.position) {
      const formData = new FormData();
      formData.append("text", overlay.text);
      formData.append("position", overlay.position);
      if (overlay.image) formData.append("image", overlay.image);

      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/overlay",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );

        const newOverlay = {
          _id: response.data.id, 
          text: overlay.text,
          position: overlay.position,
          image: response.data.image,
        };

        setOverlays((prevOverlays) => [...prevOverlays, newOverlay]);

        setOverlay({ text: "", position: "", image: null });
      } catch (error) {
        console.error("Error creating overlay:", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/overlay/${id}`);
      setOverlays(overlays.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting overlay:", error);
    }
  };

  return (
    <div className="overlay-settings">
      <h2>Manage Overlays</h2>
      <div className="overlay-inputs">
        <input
          type="text"
          placeholder="Overlay Text"
          value={overlay.text}
          onChange={(e) => setOverlay({ ...overlay, text: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setOverlay({ ...overlay, image: e.target.files[0] })}
        />
        <select
          value={overlay.position}
          onChange={(e) => setOverlay({ ...overlay, position: e.target.value })}
        >
          <option value="" disabled>
            Select Position
          </option>
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
          <option value="center">Center</option>
        </select>
        <button className="create-button" onClick={handleCreate}>
          Create
        </button>
      </div>
      <ul className="overlay-list">
        {overlays.map((item) => (
          <li key={item._id}>
            <span>
              {item.text || item.imageName} ({item.position})
            </span>
            <button
              className="delete-button"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlaySettings;
