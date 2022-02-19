import React, {useEffect} from 'react';
import Container from '@mui/material/Container';
import useUi from '../../../hooks/useUi';
import useUser from '../../../hooks/useUser';
import UsersTable from './UsersTable';
import CustomAvatar from '../../uiComponents/CuatomAvatar/CustomAvatar';

function Manage() {
  const {uiActions} = useUi();
  const {userState, userActions} = useUser();
  const {firstname, lastname, email, about} = userState;

  useEffect(() => {
    userActions.getUsers();
  }, []);
  return (
    <Container sx={{marginTop: 5}}>
      <UsersTable users={userState.manage.users} />
    </Container>
  );
}

export default Manage;
