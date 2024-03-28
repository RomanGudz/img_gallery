import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authRequest: (state) => {
      state.loading = true;
      state.error = '';
    },
    authSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    authRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    authLogout: (state) => {
      state.loading = false;
      state.data = {};
      state.error = '';
    }
  }
});

export const {
  authRequest,
  authSuccess,
  authRequestError,
  authLogout,
} = authSlice.actions;

export default authSlice.reducer;
