import React from "react";
import ReactDOM from "react-dom";
import Nav from "./Nav";
import Header from "./Header";

const render = (content, id) => {
  ReactDOM.render(content, document.getElementById(id));
};
render(<Nav />, "nav");
render(<Header />, "root");
