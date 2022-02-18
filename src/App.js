import React, {useEffect} from 'react';
import Loader from './components/Loader/Loader';
import Router from './routes/Router';
import useAuth from './hooks/useAuth';
import useUi from './hooks/useUi';
import CustomDialog from './components/CustomDialog/CustomDialog';

function App() {
  const {authState} = useAuth();
  const {uiState} = useUi();
  useEffect(() => {
    console.log(uiState.routingState.activePage);
  }, [uiState.routingState.activePage]);

  return (
    <div className="App">
      <Router isAuth={authState.isAuth} />
      <Loader />
      <CustomDialog />
    </div>
  );
}

export default App;
