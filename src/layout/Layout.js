import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import useUi from '../hooks/useUi';

function Layout() {
  const {uiState} = useUi();
  const {
    routingState: {isAuthPage},
  } = uiState;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(300);
  const toggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };
  useEffect(() => {
    setDrawerWidth(isAuthPage ? 0 : 300);
  }, [isAuthPage]);

  return (
    <Box sx={{display: 'flex'}}>
      <CssBaseline />
      <Header
        isAuthPage={uiState.routingState.isAuthPage}
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
      />
      <SideBar
        drawerWidth={drawerWidth}
        toggleDrawer={toggleDrawer}
        drawerState={drawerIsOpen}
      />
      <Box
        component="main"
        sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
