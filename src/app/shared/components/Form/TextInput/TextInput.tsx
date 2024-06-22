import { ChangeEvent, RefObject, FocusEvent, HTMLInputAutoCompleteAttribute } from 'react';

import { Input } from '@mantine/core';

type TextInputProps = {
  type: 'text' | 'email' | 'password';
  name?: string;
  placeholder: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
  value?: string;
  autocomplete?: HTMLInputAutoCompleteAttribute;
  inputRef?: RefObject<HTMLInputElement>;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
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
  inputRef,
  autocomplete,
  value,
  onChange,
  onBlur
}: TextInputProps) => {
  return (
    <Input.Wrapper label={label} required={required} error={error}>
      <Input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        ref={inputRef}
        name={name}
        autoComplete={autocomplete}
        onChange={onChange}
        onBlur={onBlur}
      />
    </Input.Wrapper>
  );
};
