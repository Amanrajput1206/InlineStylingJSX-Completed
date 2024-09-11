import React from "react";
import ReactDOM from "react-dom";
// All the css properties names are carried just that they are now camelcased
const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
