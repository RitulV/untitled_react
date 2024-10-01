
/*
Parser Functions (Parser is a bundler)

Dev builder
Local Server
Code optimization
Hot Module Replacemet
File watcher montioring any changes in files (written in C++)
Bundling
Minifying, uglify, and compression 
Hashing, code splitting
Cleaning our code
Development and production build
Super fast build algo 
caching while development
Zero config
Tree Shaking - Removing unwanted code
 */
import React from "react";
import ReactDOM from "react-dom/client";
 
const headElement = React.createElement(
  "h1",
  {
    id: "basic_element", // this will be passed as props
  },
  "Hello world!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headElement); // this element will be injected in the root and erase all the previously present elements in the root
// console.log(headElement);

// React reconciliation key
const head1 = React.createElement("h1", { key: 1 }, "Heading1"); // React requires a unique key property(prop) for each child in a list
const head2 = React.createElement("h2", { key: 2 }, "Heading2"); // to help with efficient re-renderin
const divMultHead = React.createElement(
  "div",
  {
    id: "some_id", // passing the props
  },
  [head1, head2] // for multiple elements , pass as an array
);

root.render(divMultHead);
