import React from 'react';
import Layout from '../Layout';
import style from './Main.module.css';
import List from './List';
import Modal from '../Modal';
import { Route, Routes } from 'react-router-dom';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Routes>
        {/* <Route path='/' />
        <Route path='' /> */}
        <Route path='/photos' element={<List />} >
          <Route path='photo/:id' element={<Modal />} />
        </Route>
      </Routes>
    </Layout>
  </main>
);
