import React from "react";
import Card from "./card";
import { useState } from "react";
import AddCard from "./AddCard";

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
  const [isListEmpty, setIsListEmpty] = useState(false);

  const delItem = (i) => {
    console.log(i);
    setFoodlist((prevFoodList) => {
      let newlist = prevFoodList.filter((el, idx) => {
        return idx !== i;
      });
      if (newlist.length === 0) {
        setIsListEmpty(true);
      }
      return newlist;
    });
  };

  const addItem = (a, b) => {
    console.log(a, b);
    setFoodlist((prevFoodList) => {
      let item = {
        title: a,
        text: b,
      };
      if (setIsListEmpty) {
        setIsListEmpty(false);
      }
      return [item, ...prevFoodList];
      // prevFoodList.push(item);
      // return prevFoodList;
      //adaw
    });
  };

  const editItem = (a, b, idx) => {
    setFoodlist((prevFoodList) => {
      console.log(prevFoodList);
      prevFoodList[idx].title = `${a}`;
      prevFoodList[idx].text = `${b}`;
      console.log(prevFoodList);
      return [...prevFoodList];
    });
  };

  return (
    <div className="main-container">
      <div className="addcard-container">
        <AddCard addFunc={addItem} />
      </div>
      <div className="food-list">
        {isListEmpty ? (
          <h1 id="empty-txt">List Empty!</h1>
        ) : (
          foodlist.map((el, indx) => {
            return (
              <Card
                title={el.title}
                delfunc={delItem}
                text={el.text}
                key={indx}
                idx={indx}
                editFunc={editItem}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default FoodList;
