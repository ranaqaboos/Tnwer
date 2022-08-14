import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { corsReducer } from "./reducer/courseReducer";
import { cartReducer } from "./reducer/cartReducer";
import { authReducer } from "./reducer/authReducer";
const reducer = combineReducers({
  cors: corsReducer,
  cart: cartReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer,
});

export default store;
