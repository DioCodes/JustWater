import { ADD_CUP, RESET_CUPS, SET_WEIGHT, SET_WATER_GOAL} from '../types';

export const addCup = (cup = 1, ml = 350) => {
  return {
    type: ADD_CUP,
    payload: ml,
  }
}

export const resetCups = () => {
  return {
    type: RESET_CUPS
  }
}

export const setUserWeight = (weight) => {
  return {
    type: SET_WEIGHT,
    payload: weight,
  }
}


export const setUserWaterGoal = (waterLevel) => {
  return {
    type: SET_WATER_GOAL,
    payload: waterLevel,
  }
}