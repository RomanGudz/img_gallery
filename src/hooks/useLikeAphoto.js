import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photoRequest } from '../store/photoByID/photoSlice';

export const useLikeAphoto = () => {
  const likeByUser = useSelector(state => state.photo.likeByUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photoRequest());
  });

  return [likeByUser];
};
