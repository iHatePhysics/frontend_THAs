import React from "react";
import ChessBoard from "./components/ChessBoard";
import MemeCard from "./components/MemeCard";

const App = () => {
  return (
    <div className="container">
      <ChessBoard />
      <MemeCard />
    </div>
  );
};

export default App;
