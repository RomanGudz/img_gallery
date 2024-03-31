import axios from 'axios';
import { put, takeLatest, select } from '@redux-saga/core/effects';
import {
  photoSuccess,
  photoLoading,
  photoRequestError,
} from './photoSlice';
import { URL, ACCESS_KEY } from '../../API/const';

function* photoRequestAsync(action) {
  const token = yield select(state => state.token.token);
  const loading = yield select(state => state.photo.loading);
  if (loading) return;
  yield put(photoLoading());
  try {
    const response = yield axios(`${URL}photos/${action.payload}`, {
      headers: {
        // Authorization: `Bearer ${token}`,
        Authorization: `${token ? `Bearer ${token}` :
          `Client-ID ${ACCESS_KEY}`}`,
      }
    });
    const data = response.data;
    yield put(photoSuccess(data));
  } catch (err) {
    yield put(photoRequestError(err));
  }
}

export function* watchPhotoRequestAsync() {
  yield takeLatest('photo/photoRequest', photoRequestAsync);
}
