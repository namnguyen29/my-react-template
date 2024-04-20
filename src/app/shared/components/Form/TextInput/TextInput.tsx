import { Input } from "@mantine/core";
import { FieldValues, RegisterOptions, useController, useFormContext } from "react-hook-form";

export type TextInputProps = {
  type: "text" | "email" | "password";
  name: string;
  id?: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
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
        value={field.value}
        ref={field.ref}
        name={field.name}
        onChange={field.onChange}
        onBlur={field.onBlur}
      />
    </Input.Wrapper>
  );
};
