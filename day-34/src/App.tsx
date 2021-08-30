import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { reducerType } from "./reducers/rootReducer";
import { addNote, delNote } from "./actions/actions";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [note, setNote] = useState<string>("");

  return (
    <div className="App">
      <div className="add-note">
        <input
          className="add-input"
          type="text"
          value={note}
          onChange={(e) => {
            setNote(e.target.value);
          }}
        />
        <button
          className="add-btn"
          onClick={(e) => {
            if (note) {
              dispatch(addNote(note));
              setNote("");
            }
          }}
        >
          Add
        </button>
      </div>
      <div className="todo-header">
        <h4 className="list-title">Notes</h4>
      </div>
      <div className="todo-list">
        {notes.map((item: string, index: number) => (
          <div className="todo-card" key={index}>
            <h4 className="todo-title">{item}</h4>
            <button
              className="delete-btn"
              onClick={() => {
                dispatch(delNote(index));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
