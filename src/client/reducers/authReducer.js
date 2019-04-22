import initialState from "./initialState";
import { SIGN_IN, SIGN_OUT } from "../constants/actionTypes";

export default (
  state = { isSignedIn: initialState.isSignedIn, userId: initialState.userId },
  action
) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
