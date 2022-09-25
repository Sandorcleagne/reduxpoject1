import { ActionTypes } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SETPRODUCTS,
    payload: products,
  };
};
export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTEDPRODUCT,
    payload: products,
  };
};
// export const setProducts = (products) => {
//   return {
//     type: ActionTypes.SETPRODUCTS,
//     payload: products,
//   };
// };
