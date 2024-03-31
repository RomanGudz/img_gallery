import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likePhotoReuqest } from '../store/likeAPhoto/likeSlice';

export const useLikeAphoto = (id) => {
  const likeByUser = useSelector(state => state.photo.likeByUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(likePhotoReuqest(id));
  }, []);

  return [likeByUser];
};
