import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";

//thunk // npm i redux-thunk --save-dev
import thunk from "redux-thunk";

//thunk
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  //without thunk: applyMiddleware(forbiddenWordsMiddleware),
  //thunk
  storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk))
);

export default store;