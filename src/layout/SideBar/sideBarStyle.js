const headerStyle = theme => ({
  root: {
    [theme.breakpoints.up('md')]: {
      flexShrink: 0,
      width: `${300}px`,
    },
  },
  tempDrawer: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: '300px'},
  },
  stickyDrawer: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: '300px'},
  },
});

export default headerStyle;
