import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user_reducer";
import product from "./product_reducer";
import cart from "./cart_reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user,
  product,
  cart,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
