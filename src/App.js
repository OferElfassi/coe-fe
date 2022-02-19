import React, {useEffect} from 'react';
import Loader from './components/uiComponents/Loader/Loader';
import Router from './routes/Router';
import useAuth from './hooks/useAuth';
import useUser from './hooks/useUser';
import useUi from './hooks/useUi';
import CustomDialog from './components/uiComponents/CustomDialog/CustomDialog';
import NewPostModal from './components/layout/Header/Upload/NewPostModal/NewPostModal';

function App() {
  const {authState} = useAuth();
  const {userState} = useUser();
  return (
    <div className="App">
      <Router isAuth={authState.isAuth} isManager={userState.isManager} />
      <Loader />
      <CustomDialog />
      <NewPostModal />
    </div>
  );
}

export default App;
