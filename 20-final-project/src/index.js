import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pallete from "./palette/palette";
import PalleteList from "./paletteList/paletteList";
import SingleColorPalette from "./palette/singleColorPalette";
import NewPaletteFrom from "./newPaletteForm/newPaletteForm";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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

  const removePalette = paletteName => {
    setPalettes(palettes.filter(palette => palette.paletteName !== paletteName));
  }

  return (
   <Route render={({location}) => (
     <TransitionGroup>
       <CSSTransition key={location.key} classNames='fade' timeout={500}>
        <Switch location={location}>
          <Route
            exact
            path="/"
            render={() => <div className="page"> <PalleteList removePalette={removePalette} palettes={palettes} /> </div>}
          />
          <Route
            exact
            path="/palette/new"
            render={() => (
              <div className="page">
                <NewPaletteFrom savePalette={savePalette} palettes={palettes} />
              </div>
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <div className="page">
                <Pallete
                  palette={generatePalette(findPalette(routeProps.match.params.id))}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/palette/:PaletteId/:colorId"
            render={routeProps => (
              <div className="page">
                <SingleColorPalette
                  colorId={routeProps.match.params.colorId}
                  palette={generatePalette(
                    findPalette(routeProps.match.params.PaletteId)
                  )}
                />
              </div>
            )}
          />
        </Switch>
      </CSSTransition>
     </TransitionGroup>
   )}/>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
