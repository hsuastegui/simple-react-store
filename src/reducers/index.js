import { combineReducers } from "redux";
import basket from "./basket";
import productList from "./productList";

const rootReducer = combineReducers({
  basket,
  productList
});

export default rootReducer;
