const uploadStyle = theme => ({
  dialogRoot: {
    width: 330,
    display: 'flex',
    flexDirection: 'column',
    '& .MuiTypography-root': {
      margin: 10,
      fontSize: 15,
      textAlign: 'center',
      alignSelf: 'center',
    },
    '& .MuiButton-root': {
      width: 110,
      alignSelf: 'center',
      marginBottom: 20,
      backgroundColor: 'rgb(171, 0, 60)',
    },
    '& .MuiDropzoneArea-root': {
      alignSelf: 'center',
      width: 290,
      minHeight: 96,
      backgroundColor: '#F3F4F6',
      borderRadius: '0.5rem',
      borderColor: 'rgb(171, 0, 60)',
      '& .MuiSvgIcon-root': {
        color: '#66666666',
      },
      '& .MuiDropzoneArea-text': {
        fontSize: 16,
      },
      '& .MuiDropzonePreviewList-image': {
        width: 100,
      },
    },
  },
  dialogTitle: {
    fontWeight: 700,
  },
  logoImg: {
    height: 40,
    width: 150,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

export default uploadStyle;
