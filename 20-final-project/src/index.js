import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pallete from "./palette/palette";
import PalleteList from "./paletteList/paletteList";
import SingleColorPalette from "./palette/singleColorPalette";
import NewPaletteFrom from "./newPaletteForm/newPaletteForm";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import "./index.css";

const findPalette = id => {
  return seedPalettes.find(palette => palette.id === id);
};

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => <PalleteList palettes={seedPalettes} />}
        />
        <Route exact path="/palette/new" render={() => <NewPaletteFrom />} />
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
