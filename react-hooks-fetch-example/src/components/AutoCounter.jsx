import React, { useState, useEffect, useContext  } from "react";
import { ThemeContext } from "../contexts/ThemeContext"; // Import the ThemeContext

const AutoCounter = () => {

  const { theme, toggleTheme } = useContext(ThemeContext); // Access theme from context
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup interval on unmount or stop
  }, [isRunning]);

  const toggleCounter = () => setIsRunning(!isRunning);

  return (
    <div className={`p-4 ${theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"}`}>
      <h1 className="text-2xl">Auto Counter: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={toggleCounter}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
       <button
        className="ml-4 bg-green-500 text-white px-4 py-2 rounded mt-2"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default AutoCounter;

// Practice Concepts:
//useState to manage count and isRunning.
//useEffect to handle the interval and cleanup.
