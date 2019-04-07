import initialState from "./initialState";
import { TIMER_TICK, BACKWARD, FORWARD } from "../constants/actionTypes";

export default function timerReducer(
  state = { time: initialState.timerTick, reset: false },
  action
) {
  switch (action.type) {
    case TIMER_TICK:
      return { time: action.payload, reset: false };
    case BACKWARD:
    case FORWARD:
      return { time: initialState.timerTick, reset: true };
  }
  return state;
}
