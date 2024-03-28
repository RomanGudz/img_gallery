import Header from './components/Header';
import Main from './components/Main';
import { tokenRequest } from './components/hooks/token';

const App = () => {
  tokenRequest();
  console.log();
  return (<>
    <Header />
    <Main />
  </>
  );
};

export default App;
