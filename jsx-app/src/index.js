// 1) Import React and ReactDOM libraries
import React from "react";
// import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";

// 2) Get reference to the root element
const el = document.getElementById("root");

// 3) Tell React to render the App component into the root element
const root = createRoot(el);

// 4) Create a component
function App() {
  return <input spellCheck={false} />;
}

// 5) Show the component on the screen
root.render(<App />);
