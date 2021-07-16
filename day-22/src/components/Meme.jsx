import React from "react";
import { useState } from "react";
const Meme = ({ meme, setmeme }) => {
  //   console.log(meme);
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "tempaccforproj",
    password: "t3mppassforproJ",
    boxes: [],
  });
  const genMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    // console.log(url);
    form.boxes.forEach((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setmeme({ ...meme, url: data.data.url });
      });
  };
  return (
    <div className="meme-maker" key={meme.id}>
      <div className="meme-pre">
        <img id="meme-maker-image" src={meme.url} alt="" />
        <h2 className="maker-meme-title">{meme.name}</h2>
      </div>
      <div className="input-and-buttons-container">
        <div className="input-box-container">
          {[...Array(meme.box_count)].map((_, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Caption ${index + 1}`}
              onChange={(e) => {
                const newBoxes = form.boxes;
                newBoxes[index] = { text: e.target.value };
                setForm({ ...form, boxes: newBoxes });
              }}
            />
          ))}
        </div>
        <div className="button-container">
          <button className="cta" onClick={genMeme}>
            Create Meme
          </button>
          <button
            className="cta"
            onClick={() => {
              setmeme(null);
            }}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meme;
