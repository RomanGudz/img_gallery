import { all } from 'redux-saga/effects';
import { watchAuthRequestAsync } from './auth/authSaga';
import { watchtokenRequest } from './token/tokenSaga';
import { watchPhotosRequestAsync } from './photosData/photosSaga';
import { watchPhotoRequestAsync } from './photoByID/photoSaga';
import { watchLikePhotoAsync } from './likeAPhoto/likeSaga';

export default function* rootSaga() {
  yield all([
    watchAuthRequestAsync(),
    watchtokenRequest(),
    watchPhotosRequestAsync(),
    watchPhotoRequestAsync(),
    watchLikePhotoAsync(),
  ]);
}
