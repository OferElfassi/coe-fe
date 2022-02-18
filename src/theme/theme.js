import createTheme from '@mui/material/styles/createTheme';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#EC4899',
      light: '#be185d',
      dark: 'rgb(171, 0, 60)',
    },
    success: {
      main: '#62ad00',
      light: '#8cf600',
    },
    alert: {
      main: '#d90000',
      light: '#ff2e2e',
    },
    warning: {
      main: '#ff7100',
      light: '#ff8e39',
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
      menu: '#666',
      secondary: 'rgba(53,54,70,0.4)',
      hint: '#F6F7FB',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif ",
    button: {
      fontSize: 14,
    },
    h4: {
      fontSize: 30,
      textShadow: '0px 2px 80px #FFFFFF',
      fontWeight: 600,
      color: '#000001',
    },
    h5: {
      fontSize: 18,
      textShadow: '0px 2px 80px #FFFFFF',
      fontWeight: 600,
      color: '#333',
    },
    h6: {
      color: '#666666',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 700,
    },
    h7: {
      color: '#1F2937',
      textAlign: 'center',
      fontSize: 15,
      fontWeight: 700,
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          paddingBottom: 4,
          width: 25,
          height: 50,
          marginRight: 10,
          '& .PrivateSwitchBase-input': {
            accentColor: 'rgb(171, 0, 60)',
          },
        },
        colorSecondary: {
          color: '#be185d !important',
          '&$checked': {
            color: '#be185d !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '6px 18px',
          letterSpacing: '1px',
          color: '#F6F7FB',
          fontFamily: 'inherit',
          backgroundColor: 'rgba(236,72,153,1)',
          borderRadius: '.25rem',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#d53e88',
            color: '#110607',
            boxShadow:
              ' 0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          },
          '&[type="submit"]': {
            width: '100%',
            height: 52,
            borderRadius: 8,
            backgroundImage:
              'linear-gradient(to bottom right,#ec4899,#f87171,rgba(236, 72, 153, 0))',
          },
        },
        text: {
          backgroundColor: '#ffffff',
          color: '#110607',
          '&:hover': {
            backgroundColor: '#ffffff',
            boxShadow:
              ' 0 0 #0000,0 0 #0000,0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          color: '#666666',
          textAlign: 'center',
          fontSize: 15,
          fontWeight: 700,
          '& svg': {
            fontSize: 18,
            marginRight: 8,
          },
          '&:hover': {
            color: '#EC4899',
            backgroundColor: 'inherit',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: '#6b6b6b #2b2b2b',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: 'transparent',
            width: 5,
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: '#6b6b6b',
            minHeight: 24,
            // border: '2px solid #2b2b2b',
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover':
            {
              backgroundColor: '#959595',
            },
          '&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner': {
            backgroundColor: '#2b2b2b',
          },
        },
      },
    },
  },
});

export default theme;
