import React, { useState, useEffect } from "react";

import { Structure1 } from "./structure1/structure1";
import { Structure2 } from "./structure2/structure2";

import './webpack_lab.css';

function WebpackLab() {
  const startApp = () => {
    let cities = {
      city: "Guatemala",
      zone: "2",
      address: {
        primary: "zona 2",
        secondary: "Torre C",
      },
    };
    let person = {
      name: "Ludwing",
      description: "Software Engineer",
    };
    document.getElementById("structure").appendChild(Structure1());
    document.getElementById("structure2").appendChild(Structure2());
    let city = cities.address?.primaryAddress ?? "No Address";
    let newDivCity = document.createElement("div");
    newDivCity.innerHTML = city;
    let user = person?.name ?? "Otto";
    let newDivUser = document.createElement("div");
    newDivUser.innerHTML = user;
    document.getElementById("webpack-body").appendChild(newDivCity);
    document.getElementById("webpack-body").appendChild(newDivUser);
  };

  useEffect(() => {
    startApp();
  });

  return (
    <div id="webpack-body">
      <div id="structure"></div>
      <div id="structure2"></div>
    </div>
  );
}

export default WebpackLab;
