import { FocusEventHandler, ForwardedRef, ReactNode } from 'react';

import { DatePickerInput, DateValue } from '@mantine/dates';

type DatePickerProps = {
  label: string;
  placeholder: string;
  format: string;
  name?: string;
  error?: string;
  disabled?: boolean;
  value?: DateValue;
  icon?: ReactNode;
  datePickerRef?: ForwardedRef<HTMLButtonElement>;
  onBlur?: FocusEventHandler<HTMLButtonElement>;
  onChange?: (value: DateValue) => void;
};

export const DatePicker = ({
  label,
  placeholder,
  format,
  name,
  error,
  value,
  disabled,
  icon,
  datePickerRef,
  onBlur,
  onChange
}: DatePickerProps) => {
  return (
    <DatePickerInput
      valueFormat={format}
      name={name}
      label={label}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      ref={datePickerRef}
      rightSection={icon}
      error={error}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};
