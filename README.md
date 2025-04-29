# React with Redux

## Table of Contents

1. []()

# JSX App with React

This project demonstrates how to set up a basic React application using JSX. It includes an example of importing and rendering a React component (`App`) from a separate file into the main `index.js` file.

## Getting Started

Follow these steps to set up and run the project on your local machine.

### 1. **Install NodeJS**

Before starting, make sure you have [Node.js](https://nodejs.org/) installed on your computer. Node.js is required to run React applications.

### 2. **Set Up the React App**

1. Open your terminal or command prompt.
2. Navigate to the folder where you want to create the project.
3. Run the following command to create a new React app:

```bash
npx create-react-app jsx-app
```

This will create a folder named `jsx-app` with all the necessary files and dependencies for a React project.

4. Navigate into the project folder:
   `cd jsx-app`

### 3. Install Dependencies

Run the following command to ensure all required dependencies are installed:

`npm install`

### 4. Understanding the Code

#### index.js

The `index.js` file is the entry point of the React application. It renders the `App` component into the HTML file.
Here is the code from `index.js`:

```jsx
// 1) Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client"; // React 18 requires 'react-dom/client'
import App from "./App";

// 2) Get reference to the root element
const el = document.getElementById("root");

// 3) Tell React to render the App component into the root element
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(<App />);
```

#### App.js

The `App.js` file contains the main component of the application. For example:

```jsx
// filepath: c:\Users\lf990\Desktop\WorkSpace\FutureCoders\Modern React with Redux 2024\React-with-Redux\jsx-app\src\App.js
import React from "react";

function App() {
  return <h1>Hello there!</h1>;
}

export default App;
```

### 5. Run the Application

To start the development server and see the app in your browser:

1. Run the following command:
   `npm start`
2. Open your browser and go to `http://localhost:3000`. You should see the message "Hello World!"