import { all } from 'redux-saga/effects';
import { watchAuthRequestAsync } from './auth/authSaga';
import { watchtokenRequest } from './token/tokenSaga';

export default function* rootSaga() {
  yield all([
    watchAuthRequestAsync(),
    watchtokenRequest()]);
}
