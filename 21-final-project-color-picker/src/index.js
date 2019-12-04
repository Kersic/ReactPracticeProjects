import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pallete from "./palette/palette";
import PalleteList from "./paletteList/paletteList";
import SingleColorPalette from "./palette/singleColorPalette";
import NewPaletteFrom from "./newPaletteForm/newPaletteForm";
import Page from "./transitionPage/transitionPage";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.css";

// Project for Udemy react bootcamp
// https://www.udemy.com/course/modern-react-bootcamp/

function App() {
  const [palettes, setPalettes] = useState(
    JSON.parse(window.localStorage.getItem("palettes")) || seedPalettes
  );

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes));
  }, [palettes]);

  const findPalette = id => {
    return palettes.find(palette => palette.id === id);
  };

  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette]);
  };

  const removePalette = paletteName => {
    setPalettes(
      palettes.filter(palette => palette.paletteName !== paletteName)
    );
  };

  return (
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="page" timeout={500}>
            <Switch location={location}>
              <Route
                exact
                path="/"
                render={() => (
                  <Page>
                    <PalleteList
                      removePalette={removePalette}
                      palettes={palettes}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/new"
                render={() => (
                  <Page>
                    <NewPaletteFrom
                      savePalette={savePalette}
                      palettes={palettes}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:id"
                render={routeProps => (
                  <Page>
                    <Pallete
                      palette={generatePalette(
                        findPalette(routeProps.match.params.id)
                      )}
                    />
                  </Page>
                )}
              />
              <Route
                exact
                path="/palette/:PaletteId/:colorId"
                render={routeProps => (
                  <Page>
                    <SingleColorPalette
                      colorId={routeProps.match.params.colorId}
                      palette={generatePalette(
                        findPalette(routeProps.match.params.PaletteId)
                      )}
                    />
                  </Page>
                )}
              />
              <Route
                render={() => (
                  <Page>
                    <PalleteList
                      removePalette={removePalette}
                      palettes={palettes}
                    />
                  </Page>
                )}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
