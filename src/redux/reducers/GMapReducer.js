import { GET_POSITIONS_SUCCESS,
         LEFT_SET_TIME,
         SET_SLIDER_VALUE,
         SET_SLIDER_VALUE_ONCE
       } from "../actionsTypes";

const initialState = {
  looping: false,
  sliderValue: 0,
  positions: [],
  day: 'MONDAY',
  hour: '12AM',
  count: 0,
  parity: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LEFT_SET_TIME:
      //console.log(action.payload.day, action.payload.hour);
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
    case SET_SLIDER_VALUE:
      //console.log('set slider value', action.payload.val);
      return {
        ...state,
        sliderValue: action.payload.val,
        looping: action.payload.looping,
        parity: !state.parity
      };
    case SET_SLIDER_VALUE_ONCE:
      //console.log('set slider value once', action.payload.val);
      return {
        ...state,
        sliderValue: action.payload.val,
        looping: action.payload.looping,
        parity: !state.parity
      };
    default:
      return state;
  }
}
