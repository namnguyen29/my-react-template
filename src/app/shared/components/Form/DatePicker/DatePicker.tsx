import { ReactNode } from "react";

import { useFormContext, useController } from "react-hook-form";
import { DatePickerInput } from "@mantine/dates";

type DatePickerProps = {
  label: string;
  placeholder: string;
  format: string;
  name: string;
  error?: string;
  disabled?: boolean;
  icon?: ReactNode;
};

export const DatePicker = ({
  label,
  placeholder,
  format,
  name,
  error,
  disabled = false,
  icon,
}: DatePickerProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });
  return (
    <DatePickerInput
      valueFormat={format}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      value={field.value}
      ref={field.ref}
      rightSection={icon}
      error={error}
      onBlur={field.onBlur}
      onChange={field.onChange}
    />
  );
};
