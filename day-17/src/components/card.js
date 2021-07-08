import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <h1 className="card-header">{props.title}</h1>
      <p className="card-text">Calories : {props.text}</p>
    </div>
  );
};

export default Card;
