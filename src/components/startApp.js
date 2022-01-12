import React from "react";
import "./startApp.css";
import PageRoutes from "./page-routes";
class StartApp extends React.Component {
  render() {
    return (
      <div className="app">
        <PageRoutes />
      </div>
    );
  }
}

export default StartApp;
