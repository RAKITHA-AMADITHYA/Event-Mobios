import { Box, FormControlLabel, Radio, Typography } from '@mui/material';
import React from 'react';

interface EventRadioProps {
  value: string;
  label: string;
  children?: React.ReactNode;
}

const EventRadio: React.FC<EventRadioProps> = ({ value, label, children }) => {
  return (
    <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <FormControlLabel value={value} control={<Radio />} label="" />
      <Typography variant="h5">{label}</Typography>
      {children}
    </Box>
  );
};

export default EventRadio;
