import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, loadTodo } from "../actions/actions";
const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="add-todo">
      <input
        className="add-input"
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        className="add-btn"
        onClick={(e) => {
          if (item) {
            dispatch(
              addTodo({
                title: item,
                done: false,
              })
            );
            setItem("");
          }
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          dispatch(loadTodo());
        }}
        className="fetch-btn add-btn"
      >
        Load Todo
      </button>
    </div>
  );
};

export default AddTodo;
