import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface Option {
  id: number;
  title: string;
  path: string;
}

interface EventSearchFieldProps {
  options: Option[];
  label: string;
}

const EventSearchField: React.FC<EventSearchFieldProps> = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: Option | null) => {
    setSelectedOption(newValue);
    console.log(event);
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option: Option) => option.title}
      value={selectedOption}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          label={label}
          variant="outlined"
          sx={{ '.MuiOutlinedInput-root': { borderRadius: '8px' } }}
        />
      )}
      sx={{}}
    />
  );
};

export default EventSearchField;
