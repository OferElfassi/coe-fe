/* eslint-disable global-require */

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import makeStyles from '@mui/styles/makeStyles';
import headerStyle from './headerStyle';
import MainHeaderActions from './MainHeaderActions/MainHeaderActions';
import ImageLink from '../../components/ImageLink/ImageLink';
import CustomButton from '../../components/CustomButton/CustomButton';
import AuthHeaderActions from './AuthHeaderActions/AuthHeaderActions';
import NewPostModal from './Upload/NewPostModal/NewPostModal';

const useStyles = makeStyles(headerStyle);

function Header({drawerWidth, toggleDrawer, isAuthPage}) {
  const styles = useStyles();
  return (
    <AppBar
      position="fixed"
      className={styles.root}
      sx={{
        width: {md: `calc(100% - ${drawerWidth}px)`},
        ml: {md: `${drawerWidth}px`},
      }}>
      <NewPostModal />
      <Toolbar>
        {!isAuthPage && (
          <>
            <CustomButton
              className={styles.menuIcon}
              onClick={toggleDrawer}
              icon={<MenuIcon />}
            />
            <ImageLink
              to="/"
              className={styles.logoImg}
              src={require('../../assets/images/logo.png')}
            />
          </>
        )}
        {isAuthPage ? <AuthHeaderActions /> : <MainHeaderActions />}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  isAuthPage: PropTypes.bool.isRequired,
};
export default Header;
