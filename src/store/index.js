import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { cupsReducer } from "./reducers/cupsReducer";
import { waterGoalReducer } from "./reducers/waterGoalReducer";

export const rootReducer = combineReducers({
  cups: cupsReducer,
  waterGoal: waterGoalReducer,
  user: userReducer
});