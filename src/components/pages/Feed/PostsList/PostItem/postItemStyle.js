const postItemStyle = theme => ({
  root: {
    width: '58%',
    flexShrink: 0,
    '& .MuiListItem-root': {
      paddingTop: 0,
      marginBottom: 20,
    },
    [theme.breakpoints.down('md')]: {
      width: '88%',
    },
  },
});

export default postItemStyle;
