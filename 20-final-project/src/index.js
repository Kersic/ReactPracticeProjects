import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pallete from "./palette/palette";
import PalleteList from "./paletteList/paletteList";
import SingleColorPalette from "./palette/singleColorPalette";
import NewPaletteFrom from "./newPaletteForm/newPaletteForm";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import "./index.css";

function App() {
  const [palettes, setPalettes] = useState(seedPalettes);
  useEffect(() => {
    setPalettes(JSON.parse(window.localStorage.getItem('palettes'))||seedPalettes)
  }, []);

  useEffect(() => {
    window.localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PalleteList palettes={palettes} />}
        />
        <Route
          exact
          path="/palette/new"
          render={() => (
            <NewPaletteFrom savePalette={savePalette} palettes={palettes} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Pallete
              palette={generatePalette(findPalette(routeProps.match.params.id))}
            />
          )}
        />
        <Route
          exact
          path="/palette/:PaletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                findPalette(routeProps.match.params.PaletteId)
              )}
            />
          )}
        />
      </Switch>

      {/* <div>
        
      </div> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
