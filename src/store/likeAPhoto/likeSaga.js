import axios from 'axios';
import { put, takeLatest, select, call } from '@redux-saga/core/effects';
import {
  likePhoto,
  likeError,
} from './likeSlice';
import { URL } from '../../API/const';

function* likePhotoAsync(action) {
  const token = yield select(state => state.token.token);
  const like = yield select(state => state.like.likeByUser);
  // if (loading) return;
  // yield put(photoLoading());
  try {
    const response = yield call(`${like ? axios.delete : axios.post}`,
      (`${URL}photos/${action.payload}/like`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }));
    const data = response.data;
    yield put(likePhoto(data));
  } catch (err) {
    yield put(likeError(err));
  }
}

export function* watchLikePhotoAsync() {
  yield takeLatest('like/likePhoto', likePhotoAsync);
}
