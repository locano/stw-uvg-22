import React from "react";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import SideBar from "./side-bar/sideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./startApp.css"; 
function PageRoutes() {
  return (
    <BrowserRouter>
      <SideBar />
      <div className="page-content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PageRoutes;
