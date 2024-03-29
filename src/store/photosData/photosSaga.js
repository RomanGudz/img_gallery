import axios from 'axios';
import { put, takeLatest, select } from '@redux-saga/core/effects';
import {
  photosSuccess,
  photosLoading,
  photosRequestError,
} from './photosSlice';
import { ACCESS_KEY, URL } from '../../API/const';

function* photosRequestAsync() {
  const token = yield select(state => state.token.token);
  const page = yield select(state => state.photos.page);
  const oldPhotos = yield select(state => state.photos.photos);
  const loading = yield select(state => state.photos.loading);

  if (loading) return;
  yield put(photosLoading());
  try {
    const response =
      yield axios(
        `${URL}photos${page === 1 ? '' : `?page=${page}`}?per_page=30`,
        {
          headers: {
            Authorization: `${token ? `Bearer ${token}` :
              `Client-ID ${ACCESS_KEY}`}`,
          }
        });

    const data = response.data;
    if (page > 1) {
      yield put(photosSuccess([...oldPhotos, ...data]));
    } else {
      yield put(photosSuccess(data));
    }
  } catch (err) {
    yield put(photosRequestError(err.message));
  }
}

export function* watchPhotosRequestAsync() {
  yield takeLatest('photos/photosRequest', photosRequestAsync);
}
