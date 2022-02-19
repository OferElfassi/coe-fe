/* eslint-disable global-require */

import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material';
import cx from 'clsx';
import Badge from '@mui/material/Badge';
import mainHeaderActionsStyle from './mainHeaderActionsStyle';
import CustomButton from '../../../uiComponents/CustomButton/CustomButton';
import useAuth from '../../../../hooks/useAuth';
import useUser from '../../../../hooks/useUser';
import SearchBar from '../SearchBar/SearchBar';
import Upload from '../Upload/Upload';
import Notifications from '../Notifications/Notifications';

const useStyles = makeStyles(mainHeaderActionsStyle);

function MainHeaderActions() {
  const theme = useTheme();
  const {authState} = useAuth();
  const {userState} = useUser();
  const styles = useStyles();
  const root = cx({
    [styles.root]: authState.isAuth,
    [styles.reverseRoot]: !authState.isAuth,
  });

  const loggedInUserActions = () => (
    <div>
      <Upload />
      <Badge
        color="secondary"
        badgeContent={userState.notifications.length}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}>
        <Notifications className={styles.notificationsBtn} />
      </Badge>
    </div>
  );

  return (
    <Box component="div" className={root}>
      <SearchBar />
      {authState.isAuth && loggedInUserActions()}
      {!authState.isAuth && <CustomButton text="Login" to="/login" />}
    </Box>
  );
}

export default MainHeaderActions;
