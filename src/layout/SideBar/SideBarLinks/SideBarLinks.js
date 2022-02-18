import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemLink from './ListItemLink';
import navLinks from '../../../routes/navLinks';
import useAuth from '../../../hooks/useAuth';

import LogoutIcon from '../../../assets/icons/LogoutIcon';

function SideBarLinks() {
  const {authActions} = useAuth();
  return (
    <List>
      {navLinks.map((link, index) => (
        <ListItemLink
          key={link.title}
          title={link.title}
          icon={link.icon}
          path={link.path}
        />
      ))}
      <Divider />
      <ListItem button onClick={authActions.logout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  );
}

export default SideBarLinks;
