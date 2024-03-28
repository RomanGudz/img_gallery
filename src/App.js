import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Main from './components/Main';
import { getToken } from './hooks/token';
import { updateToken } from './store/token/tokenSlice';

const App = () => {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (<>
    <Header />
    <Main />
  </>
  );
};

export default App;
