const headerStyle = theme => ({
  root: {
    backgroundColor: '#fff',
    boxShadow: '0px 1px 5px -4px rgba(0,0,0,0.61)',
  },
  menuIcon: {
    marginRight: 2,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  logoImg: {
    height: 40,
    width: 150,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default headerStyle;
