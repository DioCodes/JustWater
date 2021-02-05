import { ADD_CUP, RESET_CUPS } from "../types";

const INITIAL_STATE = {
  drinkedMl: 0,
};

export const cupsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CUP:
      return {
        ...state,
        drinkedMl: state.drinkedMl + action.payload,
      };
    case RESET_CUPS:
      return {
        ...state,
        drinkedMl: INITIAL_STATE.drinkedMl,
      };
    default:
      return state;
  }
}