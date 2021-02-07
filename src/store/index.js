import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { cupsReducer } from "./reducers/cupsReducer";

export const rootReducer = combineReducers({
  cups: cupsReducer,
  user: userReducer
});