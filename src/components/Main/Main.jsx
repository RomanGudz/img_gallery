import React from 'react';
import Layout from '../Layout';
import style from './Main.module.css';
import List from './List';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <List />
    </Layout>
  </main>
);