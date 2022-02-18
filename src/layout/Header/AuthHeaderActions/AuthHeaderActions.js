/* eslint-disable global-require */

import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import authHeaderActionsStyle from './authHeaderActionsStyle';
import CustomButton from '../../../components/CustomButton/CustomButton';
import ImageLink from '../../../components/ImageLink/ImageLink';
import useUi from '../../../hooks/useUi';

const useStyles = makeStyles(authHeaderActionsStyle);

function AuthHeaderActions() {
  const styles = useStyles();
  const {uiState} = useUi();
  const {
    routingState: {activePage},
  } = uiState;
  return (
    <Box className={styles.root} component="div">
      <ImageLink
        to="/"
        className={styles.logoImg}
        src={require('../../../assets/images/logo.png')}
      />
      <div className={styles.btnContainer}>
        <CustomButton
          text="Register"
          to="/signup"
          variant={activePage === 'signup' ? 'outlined' : 'text'}
        />
        <CustomButton
          text="Login"
          to="/login"
          variant={activePage === 'login' ? 'outlined' : 'text'}
        />
      </div>
    </Box>
  );
}

export default AuthHeaderActions;
