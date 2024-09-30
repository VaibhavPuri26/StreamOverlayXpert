// RTSPPlayer.js
import React, { useState, useEffect, useRef } from "react";
import Hls from "hls.js";
import Draggable from "react-draggable"; // Import react-draggable
import "../css/RTSPPlayer.css";

const RTSPPlayer = ({ overlays }) => {
  const [rtspUrl, setRtspUrl] = useState("");
  const videoRef = useRef(null);

  useEffect(() => {
    if (Hls.isSupported() && rtspUrl) {
      const hls = new Hls();
      hls.loadSource(rtspUrl);
      hls.attachMedia(videoRef.current);
    }
  }, [rtspUrl]);

  return (
    <div className="rtsp-player">
      <h2>RTSP Livestream Player</h2>
      <input
        type="text"
        className="rtsp-input"
        placeholder="Enter HLS URL"
        value={rtspUrl}
        onChange={(e) => setRtspUrl(e.target.value)}
      />
      {rtspUrl && (
        <div className="video-container">
          <video ref={videoRef} controls style={{ width: "100%" }} />

          {overlays.map((overlay, index) => (
            <Draggable key={index}>
              <div
                style={{
                  position: "absolute",
                  top: overlay.position.includes("top")
                    ? "10px"
                    : overlay.position === "center"
                    ? "50%"
                    : "unset",
                  bottom: overlay.position.includes("bottom")
                    ? "10px"
                    : "unset",
                  left: overlay.position.includes("left")
                    ? "10px"
                    : overlay.position === "center"
                    ? "50%"
                    : "unset",
                  right: overlay.position.includes("right") ? "10px" : "unset",
                  transform:
                    overlay.position === "center"
                      ? "translate(-50%, -50%)"
                      : "none",
                  cursor: "move",
                  zIndex: 1000,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  padding: "2px 4px",
                  borderRadius: "4px",
                }}
              >
                {overlay.text && <div>{overlay.text}</div>}
                {overlay.image && (
                  <img
                    src={`${overlay.image}?timestamp=${new Date().getTime()}`}
                    alt="overlay"
                    style={{
                      maxWidth: "100px",
                      maxHeight: "100px",
                      borderRadius: "4px",
                    }}
                  />
                )}
              </div>
            </Draggable>
          ))}
        </div>
      )}
    </div>
  );
};

export default RTSPPlayer;
