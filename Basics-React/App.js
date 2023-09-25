import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement(
   "div",
   { id: "parent" },
   React.createElement("div", { id: "child" },
      [React.createElement("h1", {}, "I am a Heading"),
      React.createElement("h2", {}, "I am a Heading2")]
   )
)

// ReactElelment(Object) => HTML (Browser Understands)

console.log(parent); // Return an object to you

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);





















// const heading = React.createElement(
//    "h1", { id: "heading" }, "Hello World From React!"
// );
