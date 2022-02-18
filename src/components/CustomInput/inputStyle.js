import {alpha} from '@mui/material/styles';

const inputStyle = theme => ({
  root: {
    position: 'relative',
  },
  icon: {
    '& svg': {
      position: 'absolute',
      fontSize: 30,
      top: 12,
      left: 10,
      zIndex: 2,
      color: '#AFAFAF',
    },
  },
  input: {
    '&  label': {
      transform: 'translate(0, 1.5px) scale(0.9)',
      fontWeight: 700,
    },
    '& .MuiInputBase-input': {
      position: 'relative',
      width: '100%',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },

  smallInput: {
    '& .MuiOutlinedInput-root': {
      marginTop: 20.34,
    },
    '& .MuiInputBase-input': {
      backgroundColor: theme.palette.text.hint,
      fontSize: 16,
      padding: '8px 11px 5px',
    },
  },
  largeInput: {
    fontSize: 15,
    backgroundColor: '#ffffff',
    boxShadow: '0px 24px 24px rgba(0, 0, 0, 0.02)',
    '& .MuiInputBase-input': {
      fontSize: 15,
      padding: '16px 11px 17px 47px',
    },
  },
});

export default inputStyle;
