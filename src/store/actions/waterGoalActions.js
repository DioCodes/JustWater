import { SET_WATER_GOAL } from '../types'

export const setWaterGoal = (waterLevel) => {
  return {
    type: SET_WATER_GOAL,
    payload: waterLevel,
  }
}