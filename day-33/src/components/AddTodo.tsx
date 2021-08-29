import React from "react";
import { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { addTodo, loadTodo } from "../actions/actions";
import ThemeContext from "../ThemeContext";
import { ThemeContextType } from "../ThemeContext";
const AddTodo = () => {
  const [item, setItem] = useState("");
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const dispatch = useDispatch();
  return (
    <div className={theme ? "add-todo dark" : "add-todo"}>
      <input
        className={theme ? "add-input dark" : "add-input"}
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
