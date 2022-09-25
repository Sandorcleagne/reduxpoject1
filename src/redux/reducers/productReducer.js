import { ActionTypes } from "../constants/actionTypes";

const intialState = {
  products: [],
};
export const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case ActionTypes.SETPRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
