import React from "react";
import Card from "./card";

const FoodList = () => {
  let fruits = [
    { title: "Watermelon", text: "30 cal per 100g" },
    { title: "Orange", text: "47 cal per 100g" },
    { title: "Banana", text: "89 cal per 100g" },
    { title: "Cantaloupe", text: "23 cal per 69g (1 wedge)" },
    { title: "Blueberries", text: "84 cal per 148g (1 cup)" },
    { title: "Mango", text: "202 cal per 336g (1 Mango)" },
  ];
  return (
    <div className="food-list">
      {fruits.map((el, indx) => {
        return <Card title={el.title} text={el.text} key={indx} />;
      })}
    </div>
  );
};

export default FoodList;
