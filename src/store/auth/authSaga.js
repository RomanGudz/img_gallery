import axios from 'axios';
import { put, takeLatest, select } from '@redux-saga/core/effects';
import {
  authSuccess,
  authRequestError,
} from './authSlice';
import { URL } from '../../API/const';

function* authRequestAsync() {
  const token = yield select(state => state.token.token);
  try {
    const response = yield axios(`${URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });

    const { username, profile_image: { small: imgUser } } = response.data;
    yield put(authSuccess({ username, imgUser }));
  } catch (err) {
    yield put(authRequestError(err));
  }
}

export function* watchAuthRequestAsync() {
  yield takeLatest('auth/authRequest', authRequestAsync);
}
