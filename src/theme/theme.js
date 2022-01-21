import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#be185d',
      light: 'rgb(247, 51, 120)',
      dark: 'rgb(171, 0, 60)',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f0f2f5',
      paper: '#fff',
    },
    info: {
      main: '#34A59F',
    },
    text: {
      primary: '#353646',
      secondary: 'rgba(53,54,70,0.4)',
      hint: '#F6F7FB',
    },
  },
  typography: {
    fontFamily: 'Inter',
    button: {
      fontSize: 14,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          backgroundColor: 'rgba(255,255,255,1)',
          borderRadius: '.375rem',
          boxShadow:
            ' 0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

export default theme;
