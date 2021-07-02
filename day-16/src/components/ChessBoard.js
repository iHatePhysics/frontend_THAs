import React from "react";
let Row = [];
let i = 0;
for (i = 0; i < 8; i++) {
  Row.push(<div className="square" />);
  console.log(Row);
}

const ChessBoard = () => {
  return (
    <div className="chessboard-container">
      <div className="board">
        <div className="row">{Row}</div>
        <div className="row">{Row}</div>
        <div className="row">{Row}</div>
        <div className="row">{Row}</div>
        <div className="row">{Row}</div>
        <div className="row">{Row}</div>
        <div className="row">{Row}</div>
        <div className="row">{Row}</div>
      </div>
      <h2 className="chessboard-title">Chess Board</h2>
    </div>
  );
};

export default ChessBoard;
