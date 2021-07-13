import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-info">
        <h1 className="card-header">{props.title}</h1>
        <p className="card-text">Calories : {props.text}</p>
      </div>
      <button
        className="delete-btn cta"
        onClick={() => {
          props.delfunc(props.idx);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
};

export default Card;
