import { ADD_CUP, RESET_CUPS } from '../types'

export const addCup = (cup = 1) => {
  return {
    type: ADD_CUP,
    payload: cup
  }
}

export const resetCups = () => {
  return {
    type: RESET_CUPS
  }
}