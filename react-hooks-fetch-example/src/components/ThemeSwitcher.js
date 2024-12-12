import React, { useContext } from "react";
import { ThemeContext } from '../contexts/ThemeContext';


const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen flex items-center justify-center ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <div className="text-center">
        <h1 className="text-3xl mb-4">Current Theme: {theme}</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
