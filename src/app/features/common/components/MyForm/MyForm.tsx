import { useEffect } from 'react';

import { Button, Container } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import { DatePicker, TextInput } from '@app-shared/components';
import { DateFormat } from '@app-shared/enums';
import { EMAIL_REGEX } from '@app-shared/constants';

type MyFormProps = {
  email: string;
  password: string;
  dateFrom: Date | null;
  dateTo: Date | null;
};

const emailFieldRules = {
  required: {
    value: true,
    message: 'Required email input'
  },
  pattern: {
    value: EMAIL_REGEX,
    message: 'Invalid email address'
  }
};

const passwordFieldRules = {
  required: {
    value: true,
    message: 'Required password'
  },
  minLength: {
    value: 8,
    message: 'Min is 8 chars'
  }
};

export const MyForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<MyFormProps>({
    defaultValues: {
      email: '',
      password: '',
      dateFrom: null,
      dateTo: null
    }
  });
  const handleFormSubmit = handleSubmit((data) => {
    console.log('dayjs format::', dayjs(data.dateFrom).format(DateFormat.default));
    console.log('form-data::', data);
  });

  useEffect(() => {
    console.log('form-error: errors::', errors);
  }, [errors]);

  return (
    <Container component="form" onSubmit={handleFormSubmit}>
      <Controller
        name="email"
        control={control}
        rules={emailFieldRules}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            type="text"
            label="Email"
            placeholder="User Email"
            autocomplete="email"
            value={value}
            error={errors.email && `${errors.email.message}`}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={passwordFieldRules}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            type="password"
            label="Password"
            placeholder="Password"
            autocomplete="current-password"
            value={value}
            error={errors.password && `${errors.password.message}`}
            onBlur={onBlur}
            onChange={onChange}
          />
        )}
      />
      <Controller
        name="dateFrom"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <DatePicker
            label="Date from"
            placeholder="Date from"
            format={DateFormat.default}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Controller
        name="dateTo"
        control={control}
        render={({ field: { onBlur, onChange, value } }) => (
          <DatePicker
            label="Date to"
            placeholder="Date to"
            format={DateFormat.default}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
          />
        )}
      />
      <Button type="submit">Submit Me</Button>
    </Container>
  );
};
