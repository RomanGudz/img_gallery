import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  page: 1,
  photos: [],
  error: '',
};

export const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    photosRequest: () => {
    },
    photosLoading: (state) => {
      state.loading = true;
    },
    photosSuccess: (state, action) => {
      state.loading = false;
      state.photos = action.payload;
      state.page++;
    },
    photosRequestError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const {
  photosRequest,
  photosLoading,
  photosSuccess,
  photosRequestError,
} = photosSlice.actions;

export default photosSlice.reducer;
