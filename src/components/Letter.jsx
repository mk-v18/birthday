import React from "react";
import "./Letter.css";

function Letter() {
  return (
    <div className="letter-page">
      <div className="letter-paper">
        <div className="heart-decor">
          <span>❤️</span>
          <span>💖</span>
          <span>💕</span>
          <span>💗</span>
          <span>❤️</span>
        </div>

        <h2 className="letter-heading">Dear Harini,</h2>

        <div className="letter-content">
          <p>
            Wishing you the happiest birthday ever. <br />
            May your life always be filled with happiness, laughter, and beautiful memories.
            <br /><br />

            Nee kosam ee chinna kavitha 💕
            <br /><br />

            Nee navvu oka magic la untundhi, <br />
            Nee presence oka beautiful feeling la untundhi.
            <br /><br />

            Nee life lo happiness, success, <br />
            And countless beautiful moments undali ani korukuntunna.
            <br /><br />

            Nuvvu eppudu ilaane smile chesthu undali, <br />
            Edhi ninnu impress cheyadaniki kadhu— <br />
            Na heart lo nee place special ani teliyadaniki anthe 💕
          </p>

          <p className="signature">
            To, <br />
            @My Sundari
          </p>
        </div>
      </div>
    </div>
  );
}

export default Letter;