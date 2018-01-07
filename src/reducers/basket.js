import { actions } from "../utils/constants";
import { addToBasket, updateBasket } from "../utils/basket";

const basket = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TO_BASKET:
      return addToBasket(state, action.payload);
    case actions.UPDATE_BASKET:
      return updateBasket(state, action.payload);
    default:
      return state;
  }
};

export default basket;
