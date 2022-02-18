import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import SideBarContent from './SideBarContent';

function SideBar({drawerWidth, drawerState, toggleDrawer}) {
  return (
    <Box
      component="nav"
      sx={{width: {md: drawerWidth}, flexShrink: {md: 0}}}
      aria-label="mailbox folders">
      <Drawer
        variant="temporary"
        open={drawerState}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: {xs: 'none', sm: 'block', md: 'none'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        }}>
        <SideBarContent />
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: {xs: 'none', sm: 'none', md: 'block'},
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
        }}
        open>
        <SideBarContent />
      </Drawer>
    </Box>
  );
}

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  drawerState: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
};
export default SideBar;
