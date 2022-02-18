const avatarStyle = theme => ({
  root: {
    // padding: '1rem',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    '& .MuiAvatar-root': {
      backgroundColor: '#cccaca',
      borderRadius: '50%',
    },
  },
  border: {
    background: 'linear-gradient(to right, #d97706, #db2777)',
  },
  xs: {
    width: 22,
    height: 22,
    '& .MuiAvatar-root': {
      width: 20,
      height: 20,
    },
  },
  sm: {
    width: 42,
    height: 42,
    '& .MuiAvatar-root': {
      width: 35,
      height: 35,
    },
  },
  md: {
    width: 108,
    height: 108,
    '& .MuiAvatar-root': {
      width: 100,
      height: 100,
    },
  },
  lg: {
    width: 130,
    height: 130,
    '& .MuiAvatar-root': {
      width: 121,
      height: 121,
    },
  },
  xl: {
    width: 230,
    height: 230,
    '& .MuiAvatar-root': {
      width: 221,
      height: 221,
    },
  },
});

export default avatarStyle;
