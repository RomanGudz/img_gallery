import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest } from '../store/auth/authSlice';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const loading = useSelector(state => state.auth.loading);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authRequest());
  }, [token]);
  return [auth, loading];
};
