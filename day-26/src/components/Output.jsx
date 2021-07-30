import React from "react";
import { useSelector } from "react-redux";
const Output = () => {
  const { name, email } = useSelector((state) => state.input);
  return (
    <div className="output">
      <h1>Data</h1>
      <div>
        Username:<p>{name}</p>
      </div>
      <div>
        Email:<p>{email}</p>
      </div>
    </div>
  );
};

export default Output;
