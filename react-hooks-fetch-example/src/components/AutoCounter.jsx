import React, { useState, useEffect } from "react";

const AutoCounter = () => {
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
    <div className="p-4">
      <h1 className="text-2xl">Auto Counter: {count}</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={toggleCounter}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default AutoCounter;

// Practice Concepts:
//useState to manage count and isRunning.
//useEffect to handle the interval and cleanup.
