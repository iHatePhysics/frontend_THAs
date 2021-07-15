import React from "react";
import { useState } from "react";
const Card = (props) => {
  // const [state, setstate] = useState(initialState)
  const [isEditing, setIsEditing] = useState(false);
  const handleEditing = () => {
    setIsEditing(true);
  };
  const [fruitname, setFruitname] = useState("");
  const [caloriecount, setCaloriecount] = useState("");

  return (
    <div className="card">
      {isEditing ? (
        <div className="card-info-editing">
          <input
            id="text-inpt"
            type="text"
            placeholder={props.title}
            value={fruitname}
            onChange={(e) => setFruitname(e.target.value)}
          />
          <input
            id="text-inpt"
            type="text"
            placeholder={props.text}
            value={caloriecount}
            onChange={(e) => setCaloriecount(e.target.value)}
          />
        </div>
      ) : (
        <div className="card-info">
          <h1 className="card-header">{props.title}</h1>
          <p className="card-text">Calories : {props.text}</p>
        </div>
      )}

      {isEditing ? (
        <div className="buttons-container">
          <button
            className="edit-done-btn cta"
            onClick={() => {
              if (fruitname !== "" && caloriecount !== "") {
                props.editFunc(fruitname, caloriecount, props.idx);
                setIsEditing(false);
              } else {
                alert("Please Enter Valid Input!");
              }
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
              class="feather feather-check"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="buttons-container">
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
          <button
            className="edit-btn cta"
            onClick={() => {
              handleEditing();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-edit-2"
            >
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
