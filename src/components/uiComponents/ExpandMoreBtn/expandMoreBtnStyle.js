const expandMoreBtnStyle = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
      '& h6': {
        color: '#444343',
      },
      '& .MuiButtonBase-root': {
        color: '#444343',
        backgroundColor: 'inherit',
      },
    },
  },
});

export default expandMoreBtnStyle;
