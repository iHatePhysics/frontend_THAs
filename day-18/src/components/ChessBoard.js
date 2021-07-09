import React from "react";
import Square from "./Square";

const Chessboard = () => {
  let squares = [];
  let x = 0;
  var bgcol = "white";
  var dark = "rgb(40, 197, 100)";
  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
      bgcol = { dark };
    } else {
      bgcol = "white";
    }
    for (let j = 0; j < 8; j++) {
      bgcol = bgcol === "white" ? `${dark}` : "white";
      squares.push(<Square key={x} bg={bgcol} />);
    }
  }

  return <div className="chess-board">{squares}</div>;
};

export default Chessboard;
