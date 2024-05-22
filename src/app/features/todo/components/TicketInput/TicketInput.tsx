import { ChangeEvent, FormEvent, useCallback, useReducer } from 'react';

import { Button, TextInput } from '@mantine/core';

import styles from './TicketInput.module.scss';
import { Todo } from '@app-shared/types';
import { TitleCard } from '..';

type Props = {
  currentTodo: Todo | null;
  addTodo: (name: string) => void;
  editTodo: (name: string) => void;
  finishEditTodo: () => void;
};

export const TicketInput = ({ currentTodo, editTodo, addTodo, finishEditTodo }: Props) => {
  const [name, dispatch] = useReducer<
    (state: string, action: { type: 'change'; payload: string }) => string,
    string
  >(
    (state, action) => {
      if (action.type === 'change') {
        return action.payload;
      }
      return state;
    },
    '',
    (arg) => arg
  );

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    currentTodo ? editTodo(value) : dispatch({ type: 'change', payload: value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (currentTodo) {
      finishEditTodo();
      dispatch({ type: 'change', payload: name && '' });
      return;
    }
    addTodo(name);
    dispatch({ type: 'change', payload: '' });
  };

  const memoizedCallback = useCallback(() => console.log('call me'), []);
  //const cb = () => console.log('call me');

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

      <TitleCard titleCard="Hey hey hey" callback={memoizedCallback} />
    </form>
  );
};
