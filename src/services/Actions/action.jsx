import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";
export const addToCart = (data) => {
  console.warn("Action", data);
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = () => {
  console.warn("Removed to Cart");
  return {
    type: REMOVE_TO_CART,
  };
};
