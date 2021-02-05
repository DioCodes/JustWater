import { SET_WATER_GOAL } from "../types";

const INITIAL_STATE = {
  waterGoal: 1400,
};

export const waterGoalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WATER_GOAL:
      return {
        ...state,
        waterGoal: action.payload,
      };
    default:
      return state;
  }
}