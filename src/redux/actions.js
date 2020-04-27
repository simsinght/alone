import { GET_POSITIONS,
         GET_POSITIONS_SUCCESS,
         POLL_POSITIONS,
         GET_POSITIONS_HOUR_SUCCESS,
         GET_POSITIONS_HOUR,
         SET_SLIDER_VALUE_ONCE,
         LEFT_SET_TIME } from "./actionsTypes";

let iter = 0;

export const getPositions = () => ({
  type: GET_POSITIONS,
  payload: {
    iter: ++iter
  }
})

export const getPositionsSuccess = (markers) => ({
  type: GET_POSITIONS_SUCCESS,
  payload: {
    markers
  }
})

export const pollPositions = () => ({
  type: POLL_POSITIONS,
  payload: {}
})

export const setTime = (time) => ({
  type: LEFT_SET_TIME,
  payload: time
})

export const getPositionsHour = () => ({
  type: GET_POSITIONS_HOUR,
  payload: {
    iter: ++iter
  }
})

export const getPositionsHourSuccess = (markers) => ({
  type: GET_POSITIONS_HOUR_SUCCESS,
  payload: {
    markers
  }
})

export const setSliderValueOnce = (val, looping) => {
  if (5 <= (val % 24) && 12 >= (val % 24)) {
    val = val - (val % 24) + 4;
  } else if (12 < (val % 24) && 20 >= (val % 24)) {
    val = val - (val % 24) + 21;
  }
  return {
    type: SET_SLIDER_VALUE_ONCE,
    payload: {
      looping,
      val
    }
  }
}

export const startLoop = (val) => {
  //console.log(val);
  if (val >= 7*24 - 1){
    val = 0;
  } else if (5 <= (val % 24) && 12 >= (val % 24)) {
    val = val - (val % 24) + 4;
  } else if (12 < (val % 24) && 20 >= (val % 24)) {
    val = val - (val % 24) + 21;
  }
  return {
    type: SET_SLIDER_VALUE_ONCE,
    payload: {
      looping: true,
      val
    }
  }
}
