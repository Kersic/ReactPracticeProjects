import React from "react";
import ReactDOM from "react-dom";
import WrapperComponent from "./WrapperComponent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <WrapperComponent>message 1</WrapperComponent>
      <WrapperComponent color="#ffd79c">message 2</WrapperComponent>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
