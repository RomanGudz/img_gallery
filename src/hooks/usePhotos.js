import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { photosRequest } from '../store/photosData/photosSlice';

export const usePhotos = () => {
  const photos = useSelector(state => state.photos.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photosRequest());
  }, []);

  return [photos];
};
