import { actions } from "../utils/constants";

export const add = payload => ({
  type: actions.ADD_TO_BASKET,
  payload
});

export const update = payload => ({
  type: actions.UPDATE_BASKET,
  payload
});
