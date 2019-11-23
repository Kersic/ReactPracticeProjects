import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {doNotRemoveAdmin} from '../middleware/UserMIddleware'

const initialState = {};
const middleware = [thunk];

const store = createStore(
		rootReducer, 
		initialState, //optional
		compose(
			applyMiddleware(thunk, doNotRemoveAdmin),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

export default store;
