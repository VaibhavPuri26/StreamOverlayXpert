// App.js
import React, { useState, useEffect } from "react";
import RTSPPlayer from "./components/RTSPPlayer";
import OverlaySettings from "./components/OverlaySettings";
import axios from "axios";
import "./css/App.css";

const App = () => {
  const [overlays, setOverlays] = useState([]);

  // Fetch overlays from the backend
  const fetchOverlays = async () => {
    const response = await axios.get("http://127.0.0.1:5000/overlay");
    setOverlays(response.data);
  };

  useEffect(() => {
    fetchOverlays();
  }, []);

  return (
    <div className="app-container">
      <h1>Stream Overlay Xpert</h1>
      <div className="content-container">
        <RTSPPlayer overlays={overlays} />
        <OverlaySettings overlays={overlays} setOverlays={setOverlays} />
      </div>
    </div>
  );
};

export default App;
