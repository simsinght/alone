import { GET_POSITIONS_SUCCESS, LEFT_SET_TIME } from "../actionsTypes";

const initialState = {
  polling: false,
  positions: [],
  day: 'MONDAY',
  hour: '9PM',
  count: 0,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LEFT_SET_TIME:
      return {
        ...state,
        day: action.payload.day,
        hour: action.payload.hour,
        count: action.payload.count
      }
    case GET_POSITIONS_SUCCESS:
      return {
        ...state,
        positions: action.payload.positions
      };
    default:
      return state;
  }
}
