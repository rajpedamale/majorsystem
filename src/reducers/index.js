// Set up your root reducer here...
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import randomNumbers from "./randomReducer";
import currentLocation from "./forwardReducer";
import timerTick from "./timerReducer";

const rootReducer = history =>
  combineReducers({
    randomNumbers,
    currentLocation,
    router: connectRouter(history),
    timerTick
  });

export default rootReducer;
