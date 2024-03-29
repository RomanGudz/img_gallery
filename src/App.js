import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import { getToken } from './hooks/token';
import { updateToken } from './store/token/tokenSlice';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      } />
    </Routes>

  );
};

export default App;
