import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';
import tokenSlice from './token/tokenSlice';
import authSlice from './auth/authSlice';
import photosSlice from './photosData/photosSlice';
import photoSlice from './photoByID/photoSlice';
import likeSlice from './likeAPhoto/likeSlice';

const sagaMidleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    auth: authSlice,
    photos: photosSlice,
    photo: photoSlice,
    like: likeSlice,
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(sagaMidleware),
});

sagaMidleware.run(rootSaga);
