import { newCard } from "../card/newCard";
export const Structure1 = () => {
  var row = document.createElement("div");
  row.classList.add("row");

  // Adding small cards
  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  newCard("Index.html", "Index page", col4);
  newCard("Style.css", "Style for index page", col4);
  newCard("Bootstrap.js", "Styling library", col4);
  newCard("Script.js", "Script element creator", col4);
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  row.appendChild(col4);

  var col4 = document.createElement("div");
  col4.classList.add("col-4");
  row.appendChild(col4);


  return row;
};
