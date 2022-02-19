const profileHeaderStyle = theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
    },
  },
  infoContainer: {
    display: 'flex',
    marginLeft: '2rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& h4': {marginBottom: '0.5rem'},
  },
  statsContainer: {
    textAlign: 'left',
    display: 'flex',
    justifyContent: 'space-between',
    width: 350,
    marginTop: '0.75rem',
    '& div': {
      display: 'flex',
      width: '30%',
      justifyContent: 'space-between',
    },
  },
});

export default profileHeaderStyle;
