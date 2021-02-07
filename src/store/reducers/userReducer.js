import { SET_WEIGHT, SET_WATER_GOAL, SET_GENDER } from "../types";

const INITIAL_STATE = {
  weight: 50,
  waterGoal: 1400,
  gender: 'Man'
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_WEIGHT:
      return {
        ...state,
        weight: action.payload,
      };
    case SET_WATER_GOAL:
      return {
        ...state,
        waterGoal: action.payload,
      };
    case SET_GENDER:
      return {
        ...state,
        gender: action.payload
      }
    default:
      return state;
  }
}