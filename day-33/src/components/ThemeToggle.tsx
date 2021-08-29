import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";
const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button
      className={theme ? "theme-btn dark" : "theme-btn"}
      onClick={() => {
        setTheme(!theme);
      }}
    >
      {theme ? "Dark" : "Light"}
    </button>
  );
};
export default ThemeToggle;
