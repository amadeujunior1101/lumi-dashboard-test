import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";

interface MySelectProps {
  label: string;
  items: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const SelectComponent: React.FC<MySelectProps> = ({ label, items, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        value={selectedValue}
        label={label}
        onChange={handleChange}
      >
        <MenuItem value="">Listar todos(as)</MenuItem>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export { SelectComponent };
