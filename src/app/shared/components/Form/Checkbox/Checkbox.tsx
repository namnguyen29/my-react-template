import { Checkbox as LibCheckbox } from "@mantine/core";
import { useFormContext, useController } from "react-hook-form";

import { InputValiation } from "@app-shared/types";

type CheckboxProps = {
  name: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
  rules?: InputValiation;
};

export const Checkbox = ({ name, id, required, disabled, error, label, rules }: CheckboxProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control, rules });

  return (
    <LibCheckbox
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      error={error}
      label={label}
      onChange={field.onChange}
      onBlur={field.onBlur}
      checked={field.value}
    />
  );
};
