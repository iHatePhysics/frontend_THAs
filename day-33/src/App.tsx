import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AddTodo from "./components/AddTodo";
import TodosList from "./components/TodosList";
import { ThemeContextType } from "./ThemeContext";

const App = () => {
  const [theme, setTheme] = useState<boolean>(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme ? "App dark" : "App"}>
        <ThemeToggle />
        <div className={theme ? "todo-app dark" : "todo-app"}>
          <AddTodo />
          <TodosList />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
