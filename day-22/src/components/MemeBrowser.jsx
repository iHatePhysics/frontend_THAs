import React from "react";
import { useState, useEffect } from "react";
import Meme from "./Meme";
import "./MemeBrowser.css";
import Templates from "./Templates";

const MemeBrowser = () => {
  const [template, setTemplate] = useState([]);
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplate(data.data.memes);
        // console.log(data.data.memes);
      });
  }, []);
  return (
    <div className="main-container">
      {meme === null ? (
        <Templates className="center" template={template} setmeme={setMeme} />
      ) : (
        <Meme meme={meme} setmeme={setMeme} />
      )}
    </div>
  );
};

export default MemeBrowser;
