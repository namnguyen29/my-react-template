import { ChangeEvent, FormEvent, useState } from 'react';

import { Button, TextInput } from '@mantine/core';

import styles from './TicketInput.module.scss';
import { Todo } from '@app-shared/types';

type Props = {
  currentTodo: Todo | null;
  addTodo: (name: string) => void;
  editTodo: (name: string) => void;
  finishEditTodo: () => void;
};

export const TicketInput = ({ currentTodo, editTodo, addTodo, finishEditTodo }: Props) => {
  const [name, setName] = useState('');

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    currentTodo ? editTodo(value) : setName(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (currentTodo) {
      finishEditTodo();
      setName(name && '');
      return;
    }
    addTodo(name);
    setName('');
  };

  return (
    <form className={styles['form-container']} onSubmit={handleSubmit}>
      <h1>My ticket list</h1>
      <div className={styles['input-control']}>
        <TextInput
          name="ticket"
          placeholder="Enter your ticket name"
          value={currentTodo?.name || name}
          onChange={onChangeInput}
        />
        <Button type="submit" disabled={name === '' && !currentTodo}>
          {currentTodo ? 'Update' : 'Add'}
        </Button>
      </div>
    </form>
  );
};
