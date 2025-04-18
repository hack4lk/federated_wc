import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MyComponent, DarkComponent } from "react-library/dist/components.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent first="lukasz" middle="" last="karpuk" />
        <DarkComponent
          first="Stencil"
          middle="'Don't call me a framework'"
          last="JS"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
