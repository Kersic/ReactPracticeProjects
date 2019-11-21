import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import index from "./js/index";

//https://www.valentinog.com/blog/redux/

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);