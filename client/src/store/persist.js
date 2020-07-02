import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import rootReducer from "../_reducers/index";

const persistConfig = {
  key: "root",
  storage,
  whiteist: ["cart"],  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
