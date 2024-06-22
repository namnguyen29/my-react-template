import { ChangeEventHandler, FocusEventHandler } from 'react';

import { Checkbox as LibCheckbox } from '@mantine/core';

type CheckboxProps = {
  checked: boolean;
  name?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const Checkbox = ({
  name,
  id,
  checked,
  required,
  disabled,
  error,
  label,
  onChange,
  onBlur
}: CheckboxProps) => {
  return (
    <LibCheckbox
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      error={error}
      checked={checked}
      label={label}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
