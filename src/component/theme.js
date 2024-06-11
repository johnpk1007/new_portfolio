import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xsm: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      lgxl: 1360,
      xl: 1536,
      xxl: 1650,
    },
  },
});

export default theme;
