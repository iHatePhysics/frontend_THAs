import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadWeather } from "../actions/actions";
import { useSelector } from "react-redux";
const Inputloc = () => {
  const [place, setPlace] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  return (
    <div className="row">
      <div className="form">
        <input
          className={theme ? "input-box dark" : "input-box"}
          type="text"
          value={place}
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
        <button
          className="btn btn-primary"
          onClick={(e) => {
            dispatch(loadWeather(place));
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Inputloc;
