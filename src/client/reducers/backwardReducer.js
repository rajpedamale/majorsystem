import initialState from "./initialState";
import { FORWARD } from "../constants/actionTypes";

export default function forwardReducer(
  state = initialState.currentLocation,
  action
) {
  const getCurrentLocation = currentLocation => {
    return (currentLocation + 100) % 100;
  };
  switch (action.type) {
    case FORWARD:
      return getCurrentLocation(action.payload);
  }
  return state;
}
