import axios from 'axios';
import { getCodeAuth } from './authCode';
import { ACCESS_KEY, REDIRECT_URI, SECRET_KEY } from '../../API/const';
import { useEffect, useState } from 'react';

export const setToken = (token) => localStorage.setItem('brearer', token);

export const getToken = () => {
  const [token, setTokenState] = useState('');
  if (!token) return;
  useEffect(() => {
    setTokenState(token);
    localStorage.setItem('brearer', token);
  }, []);

  useEffect(() => {
    if (localStorage.getItem('codeAuth')) {
      return localStorage.getItem('codeAuth');
    }
  }, [token]);
  return token;
};

export const tokenRequest = () => {
  const codeAuth = getCodeAuth();
  if (!codeAuth) return;
  axios.post(`https://unsplash.com/oauth/token`, {
    client_id: ACCESS_KEY,
    client_secret: SECRET_KEY,
    redirect_uri: REDIRECT_URI,
    code: codeAuth,
    grant_type: 'authorization_code',

  }).then((response) => {
    const { access_token: accessToken } = response.data;
    console.log(accessToken);
    setToken(accessToken);
  }).catch((err) => {
    console.log(err);
  });
};

