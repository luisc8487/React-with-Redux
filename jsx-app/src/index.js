// 1) Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client"; // React 18
import App from "./App";

// 2) Get reference to the root element
const el = document.getElementById("root");

// 3) Tell React to render the App component into the root element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);
