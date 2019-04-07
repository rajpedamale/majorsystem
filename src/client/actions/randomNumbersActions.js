import * as types from "../constants/actionTypes";

const shuffle = function(input) {
  let output = [...input];
  for (var i = output.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random() * (i + 1));
    var itemAtIndex = output[randomIndex];

    output[randomIndex] = output[i];
    output[i] = itemAtIndex;
  }
  return output;
};

export function generateRandomNumbers() {
  return {
    type: types.GENERATE_RANDOM_NUMBERS,
    payload: shuffle(new Array(100).keys())
  };
}

export function forward(currentPosition) {
  return {
    type: types.FORWARD,
    payload: currentPosition + 1
  };
}

export function backward(currentPosition) {
  return {
    type: types.BACKWARD,
    payload: currentPosition - 1
  };
}
