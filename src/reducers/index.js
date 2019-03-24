// Set up your root reducer here...
import { combineReducers } from "redux";
import randomNumbers from "./randomReducer";
import currentLocation from "./forwardReducer";
import { connectRouter } from "connected-react-router";

const rootReducer = history =>
  combineReducers({
    randomNumbers,
    currentLocation,
    router: connectRouter(history)
  });

export default rootReducer;
