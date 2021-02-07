import { ADD_CUP, RESET_CUPS } from '../types';

export const addCup = (cup = 1, ml = 350) => {
  return {
    type: ADD_CUP,
    payload: ml,
  }
};

export const resetCups = () => {
  return {
    type: RESET_CUPS
  }
};