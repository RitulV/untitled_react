import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX element which can only be understood by Babel
// it is HTML-like syntax and improves readability
const head3 = (
  <h3 id="h3" key="3">
    JSX React element
  </h3>
);

root.render(head3); // to render a jsx react element

// funtional component - NEW
// name starts with a capital letter - convention
const HeaderComponent1 = function () {
  // style 1
  return (
    <div>
      <h1>This is HeaderComponent1</h1> 
    </div>
  );
};

const HeaderComponent2 = () => (
  // style 2 only possible with arrow function
  <div>
    <h1>This is HeaderComponent2</h1>
  </div>
);

// JavaScript is inserted in JSX using {} braces  
const HeaderComponent3 = () => (
  <div>
    <h1>This is HeaderComponent3</h1>
    {/* react element inside a react component */}
    {head3}
    {/* react components inside a react component (Component composition) */}
    {HeaderComponent1()}
    <HeaderComponent2 />
  </div>
);

root.render(<HeaderComponent3 />); // to render a react component
// class based component - OLD
