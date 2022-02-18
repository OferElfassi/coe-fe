const loginStyle = theme => ({
  root: {
    height: '100%',
    marginTop: 170,
    display: 'block',
    '& h4': {
      marginBottom: 24,
    },
    '& p': {
      marginBottom: 8,
      fontSize: '1.125rem',
      lineheight: '1.75rem',
    },
    '& > :first-child': {
      maxWidth: '33rem',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& form': {
      display: 'block',
      marginTop: '0em',
      '& .MuiFormControl-root': {
        width: '100%',
      },
      '& input': {
        border: '1px solid #d3d5d8 !important',
        height: 53,
        lineHeight: 48,
        padding: '0 20px',
        outline: 'none',
        fontSize: 15,
        color: '#808080',
        maxWidth: '100%',
        width: '100%',
        boxSizing: 'border-box',
        display: 'block',
        fontWeight: 400,
        opacity: 1,
        borderRadius: 4,
        marginBottom: '0.8rem',
        backgroundColor: 'rgba(229,231,235,1)',
        boxShadow: 'none',
      },
      '& p': {
        textAlign: 'center',
        '& a': {
          textDecoration: 'none',
        },
      },
    },
  },
  middle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    '& .MuiFormControlLabel-root': {paddingLeft: 15},
    '& MuiTypography-root': {
      fontSize: 15,
      fontWeight: 500,
      color: '#444',
    },
    '& a': {
      textDecoration: 'none',
      color: '#222',
    },
  },
});

export default loginStyle;
