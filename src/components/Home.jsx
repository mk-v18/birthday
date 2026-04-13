import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="stars"></div>

      <h1 className="title">Happy Birthday Harini 🎉</h1>

      <button className="btn" onClick={() => navigate("/letter")}>
        Click for Surprise
      </button>
    </div>
  );
}

export default Home;