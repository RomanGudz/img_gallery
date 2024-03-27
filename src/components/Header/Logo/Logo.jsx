import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () =>
  <a className={style.link}>
    <img className={style.logo} src={logo} alt='unsplash logo'></img>
  </a>;
