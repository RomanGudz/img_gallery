import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  id: '',
  photo: {},
  error: '',
};

export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    photoRequest: (state, action) => {
      state.photo = {};
      state.id = action.payload;
      state.error = '';
    },
    photoLoading: (state) => {
      state.loading = true;
    },
    photoSuccess: (state, action) => {
      state.loading = false;
      state.photo = action.payload;
    },
    photoRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  photoRequest,
  photoSuccess,
  photoLoading,
  photoRequestError,
  LikeByUser,
  unLikeByUser
} = photoSlice.actions;

export default photoSlice.reducer;
