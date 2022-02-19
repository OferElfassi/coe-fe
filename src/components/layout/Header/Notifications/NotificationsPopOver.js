import React from 'react';
import Popover from '@mui/material/Popover';
import PropTypes from 'prop-types';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CustomButton from '../../../uiComponents/CustomButton/CustomButton';

function NotificationsPopOver({children, className}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <CustomButton
        size="small"
        variant="icon"
        icon={<NotificationsNoneIcon className={className} />}
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}>
        {children}
      </Popover>
    </>
  );
}

NotificationsPopOver.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default NotificationsPopOver;
