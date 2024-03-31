import axios from 'axios';
import { put, takeLatest, select, call } from '@redux-saga/core/effects';
import {
  likePhoto,
  likeError,
} from './likeSlice';
import { URL } from '../../API/const';

function* likePhotoAsync(action) {
  console.log('action: ', action.payload);
  const token = yield select(state => state.token.token);
  const like = yield select(state => state.like.likeByUser);
  // if (loading) return;
  // yield put(photoLoading());
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    let response;
    if (like) {
      response = yield call(axios.delete,
        `${URL}photos/${action.payload}/like`, config);
    } else {
      response = yield call(axios.post,
        `${URL}photos/${action.payload}/like`, null, config);
    }
    const data = response.data.photo;
    yield put(likePhoto(data));
  } catch (err) {
    yield put(likeError(err.message));
  }
}

export function* watchLikePhotoAsync() {
  yield takeLatest('like/likePhotoReuqest', likePhotoAsync);
}
