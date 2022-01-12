import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import { sideBarElements } from "./sideBarElements";

function SideBar() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={toggle ? "side-bar" : "side-bar-min"}>
      {toggle && (
        <div>
          <div className="side-bar-x-1">
            <h2 onClick={() => setToggle(false)}>{"X"}</h2>
          </div>
          <div className="logo"></div>
          <ul className="side-bar-list">
            {sideBarElements.map((element, index) => {
              return (
                <li key={index} className="side-bar-item">
                  <Link to={element.route}>
                    <div id="title">{element.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {!toggle && (
        <div className="side-bar-x-2">
          <h2 onClick={() => setToggle(true)}>{"->"}</h2>
        </div>
      )}
    </div>
  );
}

export default SideBar;
