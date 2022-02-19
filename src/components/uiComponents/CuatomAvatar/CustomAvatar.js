import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import makeStyles from '@mui/styles/makeStyles';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import avatarStyle from './avatarStyle';

const defaultAvatar = require('../../../assets/images/profile-avatar.png');

const useStyles = makeStyles(avatarStyle);

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    // eslint-disable-next-line no-bitwise
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (i = 0; i < 3; i += 1) {
    // eslint-disable-next-line no-bitwise
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

function CustomAvatar({fullName, imageUrl, size, bordered, onClick, ...rest}) {
  const styles = useStyles();
  const avatarSize = cx({
    [styles.root]: true,
    [styles.border]: bordered,
    [styles[size]]: true,
    [styles.hover]: onClick,
  });

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (fullName.length !== 0 && imageUrl.length === 0) {
    return (
      <Box
        component="div"
        className={avatarSize}
        {...rest}
        onClick={handleClick}>
        <Avatar alt={fullName} {...stringAvatar(fullName)} />
      </Box>
    );
  }
  return (
    <Box component="div" className={avatarSize} {...rest} onClick={handleClick}>
      <Avatar alt={fullName} src={imageUrl || defaultAvatar} />
    </Box>
  );
}

CustomAvatar.propTypes = {
  fullName: PropTypes.string,
  imageUrl: PropTypes.string,
  bordered: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  onClick: PropTypes.func,
};
CustomAvatar.defaultProps = {
  fullName: '',
  imageUrl: '',
  bordered: false,
  size: 'md',
  onClick: null,
};
export default CustomAvatar;
