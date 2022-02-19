const mainHeaderActionsStyle = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-end',
      '& .MuiFormControl-root': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiSvgIcon-root': {
        display: 'none',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiButton-root': {
        display: 'none',
      },
    },
  },
  notificationsBtn: {
    marginLeft: 35,
    fontSize: 28,
  },
  reverseRoot: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});

export default mainHeaderActionsStyle;
