import React from "react";
import Card from "./card";
import { useState } from "react";

const FoodList = () => {
  let fruits = [
    { title: "Watermelon", text: "30 cal per 100g" },
    { title: "Orange", text: "47 cal per 100g" },
    { title: "Banana", text: "89 cal per 100g" },
    { title: "Cantaloupe", text: "23 cal per 69g (1 wedge)" },
    { title: "Blueberries", text: "84 cal per 148g (1 cup)" },
    { title: "Mango", text: "202 cal per 336g (1 Mango)" },
  ];

  const [foodlist, setFoodlist] = useState(fruits);

  const delItem = (i) => {
    console.log(i);
    setFoodlist((prevFoodList) => {
      // prevFoodList.splice(i, 1);
      // console.log(prevFoodList);
      // return prevFoodList;
      return prevFoodList.filter((el, idx) => {
        return idx !== i;
      });
    });
    //
    // delete foodlist[i]
  };

  return (
    <div className="food-list">
      {foodlist.map((el, indx) => {
        return (
          <Card
            title={el.title}
            delfunc={delItem}
            text={el.text}
            key={indx}
            idx={indx}
          />
        );
      })}
    </div>
  );
};

export default FoodList;
