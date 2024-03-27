import style from './Auth.module.css';
import authLogo from './img/auth.svg';
import { url } from '../../../API/auth';

export const Auth = () => {
  console.log();
  return (<div className={style.container}>
    (<a href={url} className={style.authLink}>
      <img className={style.img} src={authLogo} alt='Аватар'></img>
    </a>)
  </div>);
};
