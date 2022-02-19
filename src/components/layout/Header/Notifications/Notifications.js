import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import {useNavigate} from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';
import NotificationsPopOver from './NotificationsPopOver';
import useUser from '../../../../hooks/useUser';
import CustomButton from '../../../uiComponents/CustomButton/CustomButton';

function Notifications({className}) {
  const navigate = useNavigate();
  const {userState} = useUser();
  return (
    <NotificationsPopOver className={className}>
      <Box
        sx={{
          width: 330,
          display: 'flex',
          flexDirection: 'column',
          padding: 2,
        }}>
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
          {userState.notifications.map(notif => (
            <div key={notif.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={notif.message}
                  secondary={notif.createdAt}
                />
                <Box
                  onClick={() => navigate(`/posts/${notif.post.id}`)}
                  component="img"
                  src={notif.post.image.url}
                  sx={{width: 50, height: 50, alignSelf: 'center'}}
                  lazy
                />
                <CustomButton icon={<ClearIcon />} size="small" />
              </ListItem>
              <Divider component="li" />
            </div>
          ))}
        </List>
      </Box>
    </NotificationsPopOver>
  );
}

Notifications.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Notifications;
