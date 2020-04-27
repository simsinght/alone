import { all, call, delay, put, takeLatest } from 'redux-saga/effects';
import { GET_POSITIONS_SUCCESS,
         LEFT_SET_TIME,
         SET_SLIDER_VALUE_ONCE,
         SET_SLIDER_VALUE
       } from '../actionsTypes';
import axios from 'axios';
import data from './cleanData';

let points = [[32.71163629, -117.154756], [32.72084324, -117.1690626], [32.7097405, -117.1627473], [32.70130945, -117.0693071], [32.71978873, -117.1628183], [32.72576703, -117.1702165], [32.71163942, -117.1591283], [32.73150539, -117.1592884], [32.7115838, -117.1630017], [32.70793705, -117.1540471], [32.70931728, -117.1554569], [32.71632946, -117.1600229], [32.711879, -117.164817], [32.93620922, -117.2572871], [32.70948847, -117.1550563]];
let positions = points.map(([llat, llong]) => ({
                              lat: llat,
                              lng: llong,
                              name: ' '+llat+llong
                            }));

export function* pollPositionsWalker() {
  let i = 0;
  let j = 3;
  while (true) {
    const response  = yield call(
      axios.get,
      `http://localhost:5000/${i}/${j}`,
      { 'headers': { 'Access-Control-Allow-Origin': '*', } }
    );
    //console.log(i, response.data);

    yield put({type: GET_POSITIONS_SUCCESS, payload: {positions: response.data}});
    yield delay(5000);
    i = i + j;
  }
}

export function* pollPositions() {
  yield put({type: GET_POSITIONS_SUCCESS, payload: {positions}});
  yield delay(3000);
}

export function* pollHours() {

  //console.log('callPollHours')
  let i=0, j=0, k=0;
  let numToDay = {0:'MONDAY',1:'TUESDAY',2:'WEDNESDAY',
                  3:'THURSDAY',4:'FRIDAY',5:'SATURDAY',6:'SUNDAY'}
  let timeToHour = {'00': '12-1AM',
                    '01': '1-2AM',
                    '02': '2-3AM',
                    '03': '3-4AM',
                    '04': '4-5AM',
                    '05': '5-6AM',
                    '20': '8-9PM',
                    '21': '9-10PM',
                    '22': '10-11AM',
                    '23': '11-12AM',
                  }

  for (i=0; i<data.length; i++) {
    for (j=0; j<data[i].length; j++) {
      let count = data[i][j].length
      let hour = timeToHour[data[i][j][0]['time'][3].split(':')[0]]
      yield put({ type: LEFT_SET_TIME,
                  payload: {day: numToDay[i], hour, count} })
      // 'name''lat''lng''dir'
      for (k=0;k<1;k++) {
        let out = data[i][j].slice(k, k+8)
        yield put({type: GET_POSITIONS_SUCCESS, payload: {positions: out}});
        yield delay(3000);
      }
    }
  }
}

export function* pollHour(action) {

  //console.log('callPollHour');
  if (action == null) {
    //console.log('null action');
    action = {payload: {val: 0, looping: false}}
  }

  let day = Math.floor(action.payload.val / 24);
  let hour = action.payload.val % 24;

  let numToDay = {0:'MONDAY',1:'TUESDAY',2:'WEDNESDAY', 3:'THURSDAY',
                  4:'FRIDAY',5:'SATURDAY',6:'SUNDAY'};
  let timeToHour = {'00': '12-1AM', '01': '1-2AM', '02': '2-3AM',
                    '03': '3-4AM', '04': '4-5AM', '05': '5-6AM',
                    '20': '8-9PM', '21': '9-10PM', '22': '10-11AM',
                    '23': '11-12AM', };
  let hourToIndex = {0:0, 1:1, 2:2, 3:3, 4:4, 21:5, 22:6, 23:7};
  let indexToHour = {0:0, 1:1, 2:2, 3:3, 4:4, 5:21, 6:22, 7:23};

  if (!action.payload.looping) {
    //console.log("not looping", day, hour);
    let count = data[day][hourToIndex[hour]].length;
    //console.log('count', count);
    let out = data[day][hourToIndex[hour]].slice(0,8);
    //console.log('out', hour);
    hour = timeToHour[out[0]['time'][3].split(':')[0]];
    //console.log('hour', hour);
    yield put({type: GET_POSITIONS_SUCCESS, payload: {positions: out}});
    yield put({ type: LEFT_SET_TIME, payload: {day: numToDay[day], hour, count} });
    return;
  }

  let i=day, j=hourToIndex[hour], k=0;
  for (; i<data.length; i++) {
    for (; j<data[i].length; j++) {
      let count = data[i][j].length
      let hour = timeToHour[data[i][j][0]['time'][3].split(':')[0]]
      yield put({ type: LEFT_SET_TIME,
        payload: {day: numToDay[i], hour, count} })
        // 'name''lat''lng''dir'
        for (k=0;k<1;k++) {
          let out = data[i][j].slice(k, k+8)
          yield put({type: GET_POSITIONS_SUCCESS, payload: {positions: out}});
          yield put({type: SET_SLIDER_VALUE, payload: {val: i*24+indexToHour[j], looping: true}})
          yield delay(3000);
        }
      }
      j=0;
    }
    yield put({type: SET_SLIDER_VALUE, payload: {val: i*24 - 1, looping: false}})
}

export function* watchPollHour() {
  yield takeLatest(SET_SLIDER_VALUE_ONCE, pollHour);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    // call(pollPositions),
    // call(pollPositionsWalker),
    // call(pollHours),
    call(watchPollHour),
    call(pollHour),
  ])
}

/*
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

export function* getPositions(action) {
  yield delay(1000);
  yield put({type: GET_POSITIONS_SUCCESS, positions: positions[action.payload.iter]});
}

export function* getPositionsAsync() {
  yield takeEvery(GET_POSITIONS, getPositions);
}

export function* pollPositionsAsync() {
  yield take(POLL_POSITIONS, getPositions);
}
*/
