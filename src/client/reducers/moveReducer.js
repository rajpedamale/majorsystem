import initialState from "./initialState";
import { FORWARD, BACKWARD } from "../constants/actionTypes";

export default function moveReducer(
  state = initialState.currentLocation,
  action
) {
  const getCurrentLocation = currentLocation => {
    return (currentLocation + 100) % 100;
  };
  switch (action.type) {
    case FORWARD:
    case BACKWARD:
      return getCurrentLocation(action.payload);
    default:
      return state;
  }
}
