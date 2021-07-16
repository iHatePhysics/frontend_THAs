import React from "react";
import "./MemeBrowser.css";

const Templates = ({ template, setmeme }) => {
  console.log(template);
  return (
    <div className="templates-container">
      {template.map((template) => {
        return (
          <div
            onClick={() => {
              setmeme(template);
            }}
            className="meme-card"
            key={template.id}
          >
            <div
              className="image"
              style={{ backgroundImage: `url(${template.url})` }}
            />
            <h2 className="meme-title">{template.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Templates;
