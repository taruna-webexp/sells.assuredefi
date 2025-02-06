import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function FormInput({
  name,
  control,
  errors, // Corrected prop name
  label,
  type,
  className,
  placeholder,
}) {
  return (
    <FormControl fullWidth className={className}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            InputLabelProps={{ shrink: true }}
            fullWidth
            label={label}
            placeholder={placeholder}
            type={type}
            error={!!errors?.[name]} // Corrected
            helperText={errors?.[name]?.message} // Corrected
            variant="outlined"
          />
        )}
      />
    </FormControl>
  );
}
