import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const counterUpdt = () => {
    setCount(count + 1);
  };
  return (
    <div className="counter">
      <button onClick={counterUpdt} className="btn">
        {count}
      </button>
    </div>
  );
};

export default Counter;
