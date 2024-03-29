import style from './Auth.module.css';
import authLogo from './img/auth.svg';
import { url } from '../../../API/auth';
import { useAuth } from '../../../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteToken } from '../../../store/token/tokenSlice';

export const Auth = () => {
  const [logout, setLogout] = useState(false);
  const [auth, loading] = useAuth();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(deleteToken());
    localStorage.removeItem('brearer');
    setLogout(!logout);
  };
  return (<div className={style.container}>
    {loading ? (<p>loading</p>) : auth.username ? (
      <button className={style.btn} onClick={() => {
        setLogout(!logout);
      }}>
        <img className={style.img}
          src={auth.imgUser} title={auth.username}
          alt={`Аватара ${auth.username}`}
        />
      </button>
    ) : (<a href={url} className={style.authLink}>
      <img className={style.img} src={authLogo} alt='Аватар'></img>
    </a>)
    }
    {logout && <button className={style.logout}
      onClick={logoutUser} >Выйти</button>}
  </div>);
};
