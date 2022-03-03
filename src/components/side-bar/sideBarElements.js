// Contains an array of elements to create routes
import React from "react";
import { AiOutlineMonitor } from "react-icons/ai";
import { FcContacts, FcHome, FcImageFile, FcMindMap, FcServices, FcSmartphoneTablet } from "react-icons/fc";
export const sideBarElements = [
  {
    title: "Home",
    icon: <FcHome />,
    route: "/",
  },
  {
    title: "Nginx",
    icon: <FcServices />,
    route: "/nginx",
  },
  {
    title: "Html History",
    icon: <FcSmartphoneTablet />,
    route: "/html-lab",
  },
  {
    title: "CSS Sharingan",
    icon: <FcImageFile />,
    route: "/css-lab",
  },
  {
    title: "CSS Switch",
    icon: <FcImageFile />,
    route: "/css-lab2",
  },
  {
    title: "JS Chat",
    icon: <FcSmartphoneTablet />,
    route: "/js-chat",
  },
  {
    title: "Webpack",
    icon: <FcMindMap />,
    route: "/webpack",
  },
  {
    title: "Contacto",
    icon: <FcContacts />,
    route: "/contact",
  },
];
