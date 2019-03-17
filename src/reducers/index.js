// Set up your root reducer here...
import { combineReducers } from "redux";
import randomNumbers from "./randomReducer";
import currentLocation from "./forwardReducer";

const rootReducer = combineReducers({
  randomNumbers,
  currentLocation
});

export default rootReducer;
