import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant/cartConst";

export const addToCart = (course) => (dispatch) => {
  dispatch({ type: ADD_TO_CART, payload: course });
};
