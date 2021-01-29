import { ADD_CUP, RESET_CUPS } from "../types";

const INITIAL_STATE = {
  drinkedCups: 0,
};


export const cupsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CUP:
      return {
        ...state,
        drinkedCups: state.drinkedCups + action.payload,
      };
    case RESET_CUPS:
      return {
        ...state,
        drinkedCups: INITIAL_STATE.drinkedCups,
      };
    default:
      return state;
  }
}