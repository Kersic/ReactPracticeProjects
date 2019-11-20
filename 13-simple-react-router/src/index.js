import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./homePage";
import SubPage1 from "./subPage1";
import SubPage2 from "./subPage2";
import SubPage3 from "./subPage3";
import Navbar from "./navbar";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/subPage1" component={SubPage1} />
        <Route exact path="/subPage2" component={SubPage2} />
        <Route exact path="/subPage3" component={SubPage3} />
      </Switch>
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
