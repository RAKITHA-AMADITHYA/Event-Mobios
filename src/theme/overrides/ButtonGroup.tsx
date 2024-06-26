// ----------------------------------------------------------------------

import { Theme } from "@mui/material";

export default function ButtonGroup(theme:Theme) {
  const styleContained = (color:string) => ({
    props: { variant: 'contained', color },
    style: { boxShadow: theme.shadows[10] },
  });

  return {
    MuiButtonGroup: {
      variants: [
        {
          props: { variant: 'contained', color: 'inherit' },
          style: { boxShadow: theme.shadows[1] },
        },
        styleContained('primary'),
        styleContained('secondary'),
        styleContained('info'),
        styleContained('success'),
        styleContained('warning'),
        styleContained('error'),

        {
          props: { disabled: true },
          style: {
            boxShadow: 'none',
            '& .MuiButtonGroup-grouped.Mui-disabled': {
              color: theme.palette.action.disabled,
              borderColor: `${theme.palette.action.disabledBackground} !important`,
              '&.MuiButton-contained': {
                backgroundColor: theme.palette.action.disabledBackground,
              },
            },
          },
        },
      ],

      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  };
}
