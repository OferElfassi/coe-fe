const authHeaderActionsStyle = theme => ({
  root: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    justifySelf: 'flex-end',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 210,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logoImg: {
    height: 50,
    width: 160,
  },
});

export default authHeaderActionsStyle;
