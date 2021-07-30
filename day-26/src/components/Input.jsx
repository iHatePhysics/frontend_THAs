import React from "react";
import { inputName, inputEmail } from "../actions/actions";
import { useDispatch } from "react-redux";
const Input = () => {
  const dispatch = useDispatch();
  return (
    <div className="input">
      <h1>Input</h1>
      <input
        type="text"
        onChange={(e) => {
          dispatch(inputName(e.target.value));
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          dispatch(inputEmail(e.target.value));
        }}
      />
    </div>
  );
};

export default Input;
