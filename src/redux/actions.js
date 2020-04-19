import { GET_POSITIONS,
         GET_POSITIONS_SUCCESS,
         POLL_POSITIONS,
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
