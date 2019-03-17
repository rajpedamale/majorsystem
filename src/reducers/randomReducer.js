import initialState from "./initialState";
import { GENERATE_RANDOM_NUMBERS } from "../constants/actionTypes";

export default function randomReducer(
  state = initialState.randomNumbers,
  action
) {
  switch (action.type) {
    case GENERATE_RANDOM_NUMBERS:
      return action.payload;
  }
  return state;
}
