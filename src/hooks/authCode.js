import { useEffect } from 'react';

export const setAuthCode = (code) => {
  localStorage.setItem('codeAuth', code);
};

export const getCodeAuth = () => {
  if (localStorage.getItem('codeAuth')) {
    return localStorage.getItem('codeAuth');
  }
  useEffect(() => {
    if (location.search.includes('?code=')) {
      const newCode = location.search.split('=')[1];
      localStorage.setItem('codeAuth', newCode);
    }
  }, []);
  // return localStorage.getItem('codeAuth');
};

