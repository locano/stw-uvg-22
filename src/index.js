import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import StartApp from "./components/startApp";
import 'bootstrap/scss/bootstrap.scss';
const StartComponent = () => {
  return <h1> New React APP</h1>;
};

ReactDOM.render(<StartApp />, document.getElementById("root"));
