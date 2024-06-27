import { Theme } from "@mui/material";

export default function Input(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            '& svg': { color: theme.palette.text.disabled },
          },
        },
        input: {
          padding: '6px 8px', // Adjust padding to reduce height
          lineHeight: '1.5', // Adjust line height if necessary
          '&::placeholder': {
            opacity: 1,
            color: theme.palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500],
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.grey[500],
          // borderRadius: '2px', // Set border radius to none
          '&:hover': {
            backgroundColor: theme.palette.grey[500],
          },
          '&.Mui-focused': {
            backgroundColor: theme.palette.action.focus,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
          padding: '6px 8px', // Adjust padding to reduce height
        },
        underline: {
          '&:before': {
            borderBottomColor: theme.palette.grey[500],
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '0', // Set border radius to none
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.grey[500],
          },
          '&.Mui-disabled': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.action.disabledBackground,
            },
          },
          padding: '4px 8px', // Adjust padding to reduce height
        },
        input: {
          padding: '4px 8px', // Adjust padding to reduce height
        },
      },
    },
  };
}
