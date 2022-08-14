import { ADD_TO_CART, REMOVE_FROM_CART } from "../constant/cartConst";

const initialState = {
  cartItems: [],
};

const addCourseToCart = (arr, item) => {
  let newArray = [...arr];
  if (arr.length > 0) {
    const isAlreadyAdded = arr.find((c) => c === item);

    if (isAlreadyAdded) {
      return newArray;
    } else {
      return [...newArray, item];
    }
  } else {
    newArray.push(item);
  }

  return newArray;
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addCourseToCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};
