
{/* <div id="parent">
<div id="child">
<h1>i am child 1</h1>
<h2>i am child 1</h2>
</div>
</div> */}

{/* <div id="parent">
<div id="child2">
<h1>i am child 1</h1>
<h2>i am child 1</h2>
</div>
</div> */}

const parent = React.createElement(
   "div",
   { id: "parent" },
   React.createElement("div", { id: "child" },
      [React.createElement("h1", {}, "I am a Heading"),
      React.createElement("h2", {}, "I am a Heading2")]
   )
)

// ReactElelment(Object) => HTML (Browser Understands)
// JSX = Javascript XML

console.log(parent); // Return an object to you

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);





















// const heading = React.createElement(
//    "h1", { id: "heading" }, "Hello World From React!"
// );
