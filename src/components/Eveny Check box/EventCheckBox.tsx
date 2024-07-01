import { Box, FormControlLabel, Checkbox, Typography } from '@mui/material';
import React from 'react';

interface EventCheckboxProps {
  value: string;
  label: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  children?: React.ReactNode;
}

const EventCheckbox: React.FC<EventCheckboxProps> = ({ value, label, checked, onChange, children }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <FormControlLabel
        control={<Checkbox checked={checked} onChange={onChange} value={value} />}
        label=""
      />
      <Typography variant="h6" fontWeight={400}>{label}</Typography>
      {children}
    </Box>
  );
};

export default EventCheckbox;
