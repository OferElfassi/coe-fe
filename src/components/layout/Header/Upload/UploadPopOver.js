import React from 'react';
import Popover from '@mui/material/Popover';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PropTypes from 'prop-types';
import CustomButton from '../../../uiComponents/CustomButton/CustomButton';

function UploadPopOver({children}) {
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
        aria-describedby={id}
        text="Upload"
        icon={<AddCircleIcon />}
        variant="contained"
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

UploadPopOver.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UploadPopOver;
