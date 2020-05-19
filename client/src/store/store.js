import { createStore } from "redux";
import persistedReducer from "./persist";
let store = createStore(persistedReducer);

export default store;