// Contains an array of elements to create routes
import React from "react";
import { FcContacts, FcHome, FcServices } from "react-icons/fc";
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
    title: "Contacto",
    icon: <FcContacts />,
    route: "/contact",
  },
];
