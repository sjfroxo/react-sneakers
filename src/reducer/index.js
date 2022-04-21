import { combineReducers } from "@reduxjs/toolkit";
import cardReducer from "./card";

const rootReducer = combineReducers({
    cardReducer,
});

export default rootReducer;