import { combineReducers } from "redux";
import { cupsReducer } from "./reducers/cupsReducer";

export const rootReducer = combineReducers({
  cups: cupsReducer
});