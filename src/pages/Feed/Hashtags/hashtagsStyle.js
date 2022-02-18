const hashtagsStyle = theme => ({
  root: {
    width: '100%',
    maxWidth: 335,
    backgroundColor: '#fff',
    borderRadius: '.375rem',
    height: '100%',
    boxShadow:
      '0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    '& .MuiBox-root': {
      borderBottomWidth: 1,
      borderRadius: '.375rem',
      borderColor: 'rgba(243,244,246,1)',
      backgroundColor: 'rgba(249,250,251,1)',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
});

export default hashtagsStyle;
