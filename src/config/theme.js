import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#197ec2",
    },
    warning: {
      main: "#ff9800",
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
    fontFamily: "Sukhumvit Set",
  },
  overrides: {
    MuiDialogPaper: {
      root: {
        backgroundColor: "transparent",
      },
    },
  },
});
export default theme;
