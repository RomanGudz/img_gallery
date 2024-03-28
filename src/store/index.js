import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';
import tokenSlice from './token/tokenSlice';
import authSlice from './auth/authSlice';

const sagaMidleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMidleware) =>
    getDefaultMidleware().concat(sagaMidleware),
});

sagaMidleware.run(rootSaga);
