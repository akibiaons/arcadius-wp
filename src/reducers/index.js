// src/reducers/index.js

import { combineReducers } from "redux";

const initialState = {
  cart: [], // Your initial cart state here
};

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Handle adding to cart
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      // Handle removing from cart
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
