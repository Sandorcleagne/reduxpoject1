import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";

export const reducers = combineReducers({
  allProducts: productReducer,
});
