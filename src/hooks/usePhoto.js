import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photoRequest } from '../store/photoByID/photoSlice';

export const usePhoto = (id) => {
  const photo = useSelector(state => state.photo.photo);
  const loading = useSelector(state => state.photo.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('id: ', id);
    dispatch(photoRequest(id));
  }, []);

  return [photo, loading];
};
