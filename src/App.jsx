import React, { useState } from "react";
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/Main";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app-container ${theme}`}>
      <Sidebar theme={theme} toggleTheme={toggleTheme} />
      <Main theme={theme} />
    </div>
  );
};

export default App;