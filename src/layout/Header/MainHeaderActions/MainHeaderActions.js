/* eslint-disable global-require */

import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {useTheme} from '@mui/material';
import cx from 'clsx';
import mainHeaderActionsStyle from './mainHeaderActionsStyle';
import CustomButton from '../../../components/CustomButton/CustomButton';
import useAuth from '../../../hooks/useAuth';
import SearchBar from '../SearchBar/SearchBar';
import Upload from '../Upload/Upload';
import Notifications from '../Notifications/Notifications';

const useStyles = makeStyles(mainHeaderActionsStyle);

function MainHeaderActions() {
  const theme = useTheme();
  const {authState} = useAuth();
  const styles = useStyles();
  const root = cx({
    [styles.root]: authState.isAuth,
    [styles.reverseRoot]: !authState.isAuth,
  });

  const loggedInUserActions = () => (
    <div>
      <Upload />
      <Notifications className={styles.notificationsBtn} />
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
