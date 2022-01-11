import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StartApp from "./components/startApp";
import Game from "./components/tictactoe";

const StartComponent = () => {
  return <h1> New React APP</h1>;
};

ReactDOM.render(<Game />, document.getElementById("root"));
