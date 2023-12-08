import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: "#1878f2",
    },
    warning: {
      main: "#eeba00",
    },
    success: {
      main: "#23b07a",
    },
    secondary: {
      main: "#9e9e9e",
    },
    dark: {
      main: "#000000c4",
    },
    light: {
      main: "#0000001f",
    },
    white: {
      main: "#fff",
    },
    error: {
      main: "#f44336",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
