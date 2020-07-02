import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../_reducers/index";
import promiseMiddleware from "redux-promise";

import { persistStore } from "redux-persist";
const intialState = {};
const middleware = [thunk];

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore);

export const store = createStoreWithMiddleware(
  rootReducer,
  intialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
