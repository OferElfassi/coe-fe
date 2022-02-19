import React from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import {useNavigate} from 'react-router-dom';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ListItemLink from './ListItemLink';
import navLinks from '../../../../routes/navLinks';
import useAuth from '../../../../hooks/useAuth';
import LogoutIcon from '../../../../assets/icons/LogoutIcon';
import useUser from '../../../../hooks/useUser';

function SideBarLinks() {
  const navigate = useNavigate();
  const {authActions} = useAuth();
  const {userState} = useUser();
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
      {userState.isManager && (
        <ListItem button onClick={() => navigate('/manage')}>
          <ListItemIcon>
            <ManageAccountsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Manage" />
        </ListItem>
      )}
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
