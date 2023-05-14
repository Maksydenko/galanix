import { combineReducers } from "@reduxjs/toolkit";

import universitiesReducer from "./universities/universitiesSlice";

export const rootReducer = combineReducers({
  universities: universitiesReducer,
});
