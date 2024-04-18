import { Input } from "@mantine/core";
import { useController, useFormContext } from "react-hook-form";

export type TextInputProps = {
  type: "text" | "email" | "password";
  name: string;
  id?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
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
}: TextInputProps) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control });

  return (
    <Input.Wrapper label={label} required={required}>
      <Input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        error={error}
        value={field.value}
        ref={field.ref}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    </Input.Wrapper>
  );
};
