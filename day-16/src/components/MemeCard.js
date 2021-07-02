import React from "react";
import meme from "./meme.jpg";
const MemeCard = () => {
  return (
    <div className="meme-card">
      <div className="meme">
        <img className="meme-img" alt="meme" src={meme} />
        <h2 className="top-text">Computer wondering how i'm winning</h2>
        <h2 className="bottom-text">Me Who uses the Undo button</h2>
      </div>
      <h2 className="meme-title">Chess Meme</h2>
      <p className="meme-desc">This is a Chess meme</p>
    </div>
  );
};

export default MemeCard;
