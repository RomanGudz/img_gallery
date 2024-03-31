import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likeByUser: false,
  likes: 0,
  photo: {},
  error: '',
};

const likeAPhoto = createSlice({
  name: 'like',
  initialState,
  reducers: {
    likePhotoReuqest: (state, action) => {
      state.error = '';
      state.likes = 0;
    },
    likePhoto: (state, action) => {
      state.likeByUser = action.payload.liked_by_user;
      state.likes = action.payload.likes;
    },
    likeError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  likePhotoReuqest,
  likePhoto,
  likeError,
} = likeAPhoto.actions;

export default likeAPhoto.reducer;
