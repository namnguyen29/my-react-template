import { Input } from "@mantine/core";
import { useController, useFormContext } from "react-hook-form";

import { InputValiation } from "@app-shared/types";

type TextInputProps = {
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
  value?: string;
  rules?: InputValiation;
};

export const TextInput = ({
  id,
  type,
  placeholder,
  name,
  error,
  disabled,
  required,
  label,
  rules,
  value,
}: TextInputProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control, rules });

  return (
    <Input.Wrapper label={label} required={required} error={error}>
      <Input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value || field.value}
        ref={field.ref}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    </Input.Wrapper>
  );
};
