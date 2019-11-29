import React from "react";
import ReactDOM from "react-dom";
import Pallete from "./palette";
import seedPalettes from "./seedPalettes";

function App() {
  return (
    <div className="App">
      <Pallete {...seedPalettes[4]} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
