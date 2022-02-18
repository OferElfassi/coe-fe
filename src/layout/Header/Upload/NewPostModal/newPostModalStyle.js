const newPostModalStyle = theme => ({
  headerRoot: {
    position: 'relative',
    '& .MuiToolbar-root': {
      backgroundColor: '#e8e8e8',
      display: 'flex',
      '& h4': {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  },
  contentRoot: {
    marginTop: 10,
    display: 'flex',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      '& .MuiDivider-root': {
        marginLeft: 50,
        marginRight: 50,
      },
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      '& .MuiDivider-vertical': {
        display: 'none',
      },
      '& .MuiDivider-root': {
        borderWidth: 1,
        width: '100%',
      },
    },
  },
});

export default newPostModalStyle;
