import {all} from 'redux-saga/effects';
import GameSaga from '../Game/GameSaga';

export default function* rootSaga() {
  yield all([ GameSaga() ]);
}
