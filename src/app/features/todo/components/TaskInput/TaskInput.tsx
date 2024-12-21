import { useEffect } from 'react';

import { Button } from '@mantine/core';
import { useForm, Controller } from 'react-hook-form';

import styles from './TaskInput.module.scss';
import { TextInput } from '@app-shared/components';

type TaskInputProps = {
  mode: 'add' | 'update';
  editingValue: { id: string; name: string };
  onSubmit: (data: { name: string }) => void;
};

const inputRules = {
  required: {
    value: true,
    message: 'Required task input value'
  }
};

export const TaskInput = ({ editingValue, mode, onSubmit }: TaskInputProps) => {
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors }
  } = useForm<{ name: string }>({
    defaultValues: {
      name: ''
    }
  });

  useEffect(() => {
    setValue('name', editingValue.name);
  }, [editingValue, setValue]);

  return (
    <form
      className={styles['form-container']}
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        setValue('name', '');
      })}
    >
      <Controller
        name="name"
        control={control}
        rules={inputRules}
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            type="text"
            placeholder="Caption goes here"
            error={errors.name?.message}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <Button type="submit">{mode === 'add' ? 'Add' : 'Update'}</Button>
    </form>
  );
};
