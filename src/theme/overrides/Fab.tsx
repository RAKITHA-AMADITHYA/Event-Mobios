// ----------------------------------------------------------------------

import { Theme } from "@mui/material";

export default function Fab(theme: Theme) {
  return {
    MuiFab: {
      defaultProps: {
        color: "primary",
      },

      styleOverrides: {
        root: {
          boxShadow: theme.shadows[10],
          "&:hover": {
            boxShadow: "none",
            backgroundColor: theme.palette.grey[400],
          },
        },
        primary: {
          boxShadow: theme.palette.grey[400],
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
        },
        secondary: {
          boxShadow: theme.palette.grey[400],
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
        },
        extended: {
          "& svg": {
            marginRight: theme.spacing(1),
          },
        },
      },
    },
  };
}
