import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container fade-out">
      <div className="stars"></div>

      <div className="hearts">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      <h1 className="loader-text">Loading Surprise...</h1>
    </div>
  );
}

export default Loader;