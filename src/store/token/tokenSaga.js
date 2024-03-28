import axios from 'axios';
import { put, takeLatest, select } from '@redux-saga/core/effects';
import { getCodeAuth } from '../../hooks/authCode';
import { ACCESS_KEY, REDIRECT_URI, SECRET_KEY } from '../../API/const';
import {
  loadingToken,
  updateToken,
  // deleteToken, подумать нужен или нет???
  errorToken,
} from './tokenSlice';
import { setToken } from '../../hooks/token';


function* tokenRequest() {
  const codeAuth = getCodeAuth();
  const token = yield select(state => state.token.token);
  if (!token && !codeAuth) return;
  yield put(loadingToken());

  try {
    const response = yield axios.post(`https://unsplash.com/oauth/token`, {
      client_id: ACCESS_KEY,
      client_secret: SECRET_KEY,
      redirect_uri: REDIRECT_URI,
      code: codeAuth,
      grant_type: 'authorization_code',
    });
    const { access_token: accessToken } = response.data;
    yield put(updateToken(accessToken));
    setToken(accessToken);
  } catch (err) {
    console.log(err);
    yield put(errorToken(err.message));
  }
}

export function* watchtokenRequest() {
  yield takeLatest('token/requestStart', tokenRequest);
}
