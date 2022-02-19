const inputCommentStyle = theme => ({
  root: {
    padding: '0px 15px 13px 15px !important',
    display: 'flex',
    '& .MuiFormControl-root': {
      width: '100%',
      '& .MuiOutlinedInput-root': {
        marginTop: 0,

        '& input': {
          padding: '10px 20px',
          borderRadius: 20,
        },
        '&.Mui-disabled': {
          color: '#673 !important',
        },
      },
    },
    '& .MuiIconButton-root': {
      position: 'absolute',
      right: 10,
    },
  },
});

export default inputCommentStyle;
