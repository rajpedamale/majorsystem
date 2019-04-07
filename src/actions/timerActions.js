import * as types from "../constants/actionTypes";

export function timerTick(ms) {
  return {
    type: types.TIMER_TICK,
    payload: Math.round(ms / 1000)
  };
}
