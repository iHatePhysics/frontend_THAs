import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../actions/actions";
const Header = () => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <h2 className="logo">Weather</h2>
      <button
        className="btn dark-btn"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        {theme ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Header;
