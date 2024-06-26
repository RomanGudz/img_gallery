import React from 'react';
import Layout from '../Layout';
import style from './Header.module.css';
import Logo from './Logo';
import Auth from './Auth';

export const Header = () => (<header className={style.header}>
  <Layout>
    <div className={style.gridContainer}>
      <Logo />
      <Auth />
    </div>
  </Layout>
</header>);
