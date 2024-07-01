import React, { useState } from "react";
import { Box, TextField, Typography, IconButton, InputAdornment } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface EventTextFieldProps {
  label: string;
  placeholder?: string;
  variant?: "outlined" | "filled" | "standard";
  type?: string;
}

const EventTextField: React.FC<EventTextFieldProps> = ({
  label,
  placeholder = "",
  variant = "outlined",
  type = "text"
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'column', alignItems: 'start', mb: 2 }}>
      <Typography variant="h6" fontWeight={400}>
        {label}
      </Typography>
      <TextField
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
        variant={variant}
        fullWidth
        sx={{
          '.MuiOutlinedInput-root': {
            borderRadius: '8px',
            mt: 1,
            color: '#fff',
          },
        }}
        InputProps={type === "password" ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        } : undefined}
      />
    </Box>
  );
};

export default EventTextField;