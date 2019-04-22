// Set up your root reducer here...
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import randomNumbers from "./randomReducer";
import currentLocation from "./moveReducer";
import timerTick from "./timerReducer";
import auth from "./authReducer";

const rootReducer = history =>
  combineReducers({
    randomNumbers,
    currentLocation,
    router: connectRouter(history),
    timerTick,
    auth
  });

export default rootReducer;
