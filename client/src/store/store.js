import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../_reducers/index";
import promiseMiddleware from "redux-promise";

import { persistStore } from "redux-persist";
const intialState = {};
const middleware = [thunk];
export const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware, promiseMiddleware))
);

export const persistor = persistStore(store);
