import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import { sideBarElements } from "./sideBarElements";
import { AiOutlineMenu,AiFillCaretRight } from "react-icons/ai";
function SideBar() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className={toggle ? "side-bar" : "side-bar-min"}>
      {toggle && (
        <div className="side-bar-content">
          <div className="side-bar-action">
            <AiOutlineMenu onClick={() => setToggle(false)} className="side-bar-action-icon" />
          </div>
          <a href="https://www.uvg.edu.gt/">
            <div className="side-bar-logo"></div>
          </a>
          <ul className="side-bar-list">
            {sideBarElements.map((element, index) => {
              return (
                <li key={index} >
                  <Link to={element.route} className="side-bar-item">
                    <div id="icon">{element.icon}</div>
                    <div id="title">{element.title}</div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {!toggle && (
       <div className="side-bar-action-close">
       <AiFillCaretRight onClick={() => setToggle(true)} />
     </div>
      )}
    </div>
  );
}

export default SideBar;
