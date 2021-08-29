import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delTodo, clearTodo } from "../actions/actions";
import { ThemeContextType } from "../ThemeContext";
import ThemeContext from "../ThemeContext";

const TodosList = () => {
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const todos = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="todo-header">
        <h4 className="list-title">Todos</h4>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(clearTodo());
          }}
        >
          Clear
        </button>
      </div>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className={theme ? "todo-card dark" : "todo-card"} key={index}>
            <h4 className="todo-title">{todo.title}</h4>
            <input type="checkbox" onClick={() => {}}></input>
            <button
              className="delete-btn"
              onClick={() => {
                dispatch(delTodo(index));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodosList;
