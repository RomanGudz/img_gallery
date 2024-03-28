import { useDispatch } from 'react-redux';
import { getCodeAuth } from './authCode';
import { requestStart } from '../store/token/tokenSlice';

export const setToken = (token) => {
  localStorage.setItem('brearer', token);
};

export const getToken = () => {
  const dispatch = useDispatch();
  getCodeAuth();
  if (localStorage.getItem('brearer')) {
    return localStorage.getItem('brearer');
  }
  dispatch(requestStart());
};


