import * as types from "../constants/actionTypes";

export const signIn = () => {
  return {
    type: types.SIGN_IN
  };
};

export const signOut = userId => {
  return {
    type: types.SIGN_OUT,
    payload: userId
  };
};
