import React from "react";
import "./css_style2.css";
function CSSLab2() {
  return (
    <>
      <div id="nintendo-switch">
        <div id="aqua-joycon">
          <div id="minus"></div>
          <div class="controls joystick" id="aqua-joystick">
            <div class="controls joystick-ring"></div>
          </div>
          <div class="button-diamond" id="aqua-button-diamond">
            <div class="controls button">▲</div>
            <div class="controls button">◄</div>
            <div class="controls button">►</div>
            <div class="controls button">▼</div>
          </div>
          <div id="capture-button"></div>
        </div>

        <div id="switch-body">
          <div id="top-buttons"></div>
          <div id="hole-red"></div>
          <div id="hole-aqua"></div>
          <div id="switch-glass">
            <div class="screen-gap" id="left-screen-gap"></div>
            <div class="screen-gap" id="right-screen-gap"></div>
            <div id="switch-screen"></div>
          </div>
        </div>

        <div id="red-joycon">
          <div class="plus"></div>
          <div class="plus"></div>
          <div class="button-diamond" id="red-button-diamond">
            <div class="controls button">X</div>
            <div class="controls button">Y</div>
            <div class="controls button">A</div>
            <div class="controls button">B</div>
          </div>
          <div class="controls joystick" id="red-joystick">
            <div class="controls joystick-ring"></div>
          </div>
          <div class="controls button" id="home-button"></div>
        </div>

        <div id="switch-shadow"></div>
      </div>
    </>
  );
}

export default CSSLab2;
