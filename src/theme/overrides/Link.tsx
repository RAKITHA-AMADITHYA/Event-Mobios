// ----------------------------------------------------------------------

import {useTheme} from "@mui/material/styles";

export default function Link() {

  const theme = useTheme();

  return {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          color: theme.palette.primary.dark,
        }
      }
    },
  };
}
