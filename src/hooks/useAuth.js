import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest } from '../store/auth/authSlice';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const loading = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(authRequest());
    navigate('/photos');
  }, [token]);
  return [auth, loading];
};
