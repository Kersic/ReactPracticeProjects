import React from "react";
import ReactDOM from "react-dom";
import Pallete from "./palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <div className="App">
      <Pallete palette={generatePalette(seedPalettes[4])} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
