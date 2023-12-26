import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

const initialStates = {
  cardData: [],
};

export default function cardItems(state = initialStates, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("Reducer", action);
      return {
        ...state,
        cardData: action.data,
      };
      break;
    case REMOVE_TO_CART:
      console.warn("Reducer", action);
      // state.pop();
      return {
        ...state,
      };
      break;
    default:
      return state;
  }
}
