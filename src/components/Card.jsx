import React, { useState } from "react";
import Letter from "./Letter";
import "../App.css";

function Card() {
  const [openLetter, setOpenLetter] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setOpenLetter(true)}>
        📩 Open Me
      </div>

      {openLetter && <Letter />}
    </>
  );
}

export default Card;