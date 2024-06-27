// ----------------------------------------------------------------------

import { Theme } from "@mui/material";

export default function Button(theme:Theme) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            boxShadow: "none",
          },
          borderRadius: '15px',
        },
        sizeLarge: {
          height: 48,
        },
        // contained
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.shadows[1],
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.shadows[10],
        },
        containedSecondary: {
          boxShadow: theme.shadows[10],
        },
        containedInfo: {
          boxShadow: theme.shadows[10],
        },
        containedSuccess: {
          boxShadow: theme.shadows[10],
        },
        containedWarning: {
          boxShadow: theme.shadows[10],
        },
        containedError: {
          boxShadow: theme.shadows[10],
        },
        // outlined
        outlinedInherit: {
          border: `1px solid ${theme.palette.grey[500]}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
