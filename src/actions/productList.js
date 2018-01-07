import axios from "axios";
import { actions } from "../utils/constants";

export const add = payload => ({
  type: actions.ADD_PRODUCTS,
  payload
});

/**
 * Async Actions
 */
export const loadProducts = () => {
  return dispatch =>
    axios
      .get("https://api.myjson.com/bins/zfebv")
      .then(response => {
        dispatch(add(response.data));
      })
      .catch(error => {
        console.log(error);
      });
};
