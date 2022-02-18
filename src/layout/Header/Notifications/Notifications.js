import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import NotificationsPopOver from './NotificationsPopOver';
import CustomButton from '../../../components/CustomButton/CustomButton';

function Notifications({className}) {
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
          {[1, 2, 3].map(value => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <CustomButton size="small" icon={<HighlightOffIcon />} />
              }>
              <ListItemText primary={`Line item ${value}`} />
            </ListItem>
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
