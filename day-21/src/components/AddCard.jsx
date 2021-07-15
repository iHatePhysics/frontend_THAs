import React from "react";
import { useState } from "react";

const AddCard = (props) => {
  const [fruitname, setFruitname] = useState("");
  const [caloriecount, setCaloriecount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fruitname !== "" && caloriecount !== "") {
      props.addFunc(fruitname, caloriecount);
      setFruitname("");
      setCaloriecount("");
    } else {
      alert("Please Enter Valid Input!");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="addcard-container">
        <input
          //   id="text-inpt"
          className="addcard-inpt inpt-title"
          type="text"
          placeholder="Fruit Name"
          value={fruitname}
          onChange={(e) => setFruitname(e.target.value)}
        />
        <input
          //   id="text-inpt"
          className="addcard-inpt inpt-text"
          type="text"
          placeholder="Calories"
          value={caloriecount}
          onChange={(e) => setCaloriecount(e.target.value)}
        />
        <button className="cta add-btn" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddCard;
