import { createTheme } from '@material-ui/core/styles';
import { primaryColor, neutralColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: primaryColor,
      contrastText: "white"
    },

    text: {
        primary: neutralColor
    }
  },
});

export default theme