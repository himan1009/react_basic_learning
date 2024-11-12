import React, { useState } from "react";
import "./App.css";

export const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    if (value > 0) {
      setValue(value - 1);

      // Show popup when the value will become zero
      if (value - 1 === 0) {
        alert("The value has reached zero!");
      }
    } else {
      setValue(0);
    }
  };

  return (
    <div className="App">
      <div>
        <p>Counter : {value}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>deccrement</button>
      </div>
    </div>
  );
};
