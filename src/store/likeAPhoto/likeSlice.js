import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  likeByUser: false,
  likes: 0,
  id: '',
  photo: {},
  error: '',
};

const likeAPhoto = createSlice({
  name: 'like',
  initialState,
  reducers: {
    likePhotoReuqest: (action) => {
      action.error = '';
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
