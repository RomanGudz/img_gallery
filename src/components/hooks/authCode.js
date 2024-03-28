import { useEffect, useState } from 'react';

export const setAuthCode = (code) => {
  localStorage.setItem('codeAuth', code);
};

export const getCodeAuth = () => {
  const [code, setCodeState] = useState('');
  useEffect(() => {
    if (location.search.includes('?code=')) {
      const newCode = location.search.split('=')[1];
      setCodeState(newCode);
      localStorage.setItem('codeAuth', newCode);
    }
  }, []);

  // useEffect(() => {
  //   if (localStorage.getItem('codeAuth')) {
  //     return localStorage.getItem('codeAuth');
  //   }
  // }, [token]);
  return code;
};

