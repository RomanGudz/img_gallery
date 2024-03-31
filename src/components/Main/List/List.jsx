import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './List.module.css';
import { photosRequest } from '../../../store/photosData/photosSlice';
import Photo from './Photo';
import { Outlet } from 'react-router-dom';


export const List = () => {
  const endList = useRef(null);
  const dispatch = useDispatch();
  const photos = useSelector(state => state.photos.photos);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(photosRequest());
      }
    }, { rootMargin: '50px' });

    observer.observe(endList.current);
    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (<>
    <ul className={style.list}>
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} />))}
      <li ref={endList} className={style.end} ></li>
    </ul><Outlet />
  </>);
};
