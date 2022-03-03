import React from "react";
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import CSSLab from "./pages/css_lab/cssLab";
import CSSLab2 from "./pages/css_lab/cssLab2";
import JSLab from "./pages/js_lab/jsLab";
import HTMLLab from "./pages/html_lab/htmlLab";
import Lanzamiento from "./pages/html_lab/lanzamiento";
import Produccion from "./pages/html_lab/produccion";
import Recepcion from "./pages/html_lab/recepcion";
import Resumen from "./pages/html_lab/resumen";
import SideBar from "./side-bar/sideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./startApp.css"; 
import Nginx from "./pages/nginx/nginx";
function PageRoutes() {

  return (
    <BrowserRouter>
      <SideBar />
      <div className="page-content">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/nginx" element={<Nginx />}></Route>
          <Route path="/html-lab" element={<HTMLLab />}></Route>
          <Route path="/html-lab/lanzamiento" element={<Lanzamiento />}></Route>
          <Route path="/html-lab/produccion" element={<Produccion />}></Route>
          <Route path="/html-lab/recepcion" element={<Recepcion />}></Route>
          <Route path="/html-lab/resumen" element={<Resumen />}></Route>
          <Route path="/css-lab" element={<CSSLab />}></Route>
          <Route path="/css-lab2" element={<CSSLab2 />}></Route>
          <Route path="/js-chat" element={<JSLab />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default PageRoutes;
