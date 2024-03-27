// import axios from 'axios';
import { getToken } from './token';

export const authRequest = () => {
  const token = getToken();
  if (!token) return;
};
