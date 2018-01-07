import { actions } from "../utils/constants";

const productList = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_PRODUCTS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default productList;
