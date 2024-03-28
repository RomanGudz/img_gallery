import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  token: '',
  nameUser: '',
  error: '',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    requestStart: (state) => {
      state.loading = false;
    },
    loadingToken: (state) => {
      state.loading = true;
      state.error = '';
    },
    updateToken: (state, action) => {
      state.loading = false;
      state.token = action.payload;
    },
    deleteToken: (state) => {
      state.loading = false;
      state.token = '';
    },
    errorToken: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  requestStart,
  loadingToken,
  updateToken,
  deleteToken,
  errorToken,
} = tokenSlice.actions;

export default tokenSlice.reducer;
