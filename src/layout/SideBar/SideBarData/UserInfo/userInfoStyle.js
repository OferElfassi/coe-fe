const userInfoStyle = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    '& a': {
      marginTop: 10,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& h6': {
      marginTop: 16,
      fontSize: 20,
      fontWeight: 500,
    },
  },
  statsContainer: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  statsItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '30%',
  },
});
export default userInfoStyle;
