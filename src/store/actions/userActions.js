import { SET_WEIGHT, SET_WATER_GOAL, SET_GENDER } from '../types';

export const setUserWeight = (weight) => {
  return {
    type: SET_WEIGHT,
    payload: weight,
  }
};

export const setUserWaterGoal = (waterLevel) => {
  return {
    type: SET_WATER_GOAL,
    payload: waterLevel,
  }
};

export const setUserGender = (gender) => {
  return {
    type: SET_GENDER,
    payload: gender
  }
}