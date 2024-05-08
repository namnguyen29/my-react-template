import { ChangeEvent } from 'react';

import { Button, Checkbox } from '@mantine/core';

import styles from './TicketList.module.scss';
import { Todo } from '@app-shared/types';

type Props = {
  doneTaskList?: boolean;
  todos: Todo[];
  startEditTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  handleCompletedTodo: (id: string, done: boolean) => void;
};
export const TicketList = ({
  doneTaskList,
  todos,
  startEditTodo,
  deleteTodo,
  handleCompletedTodo
}: Props) => {
  /**
   * Use currying function to get the callback, pass it to onChange
   */
  const onCheckboxChange = (id: string) => (event: ChangeEvent<HTMLInputElement>) => {
    handleCompletedTodo(id, event.target.checked);
  };

  return (
    <section className="tickets">
      <h2>{doneTaskList ? 'Completed' : 'Uncompleted'}</h2>
      {todos.map((todo, index) => (
        <div className={styles['ticket']} key={`${index}-${todo.id}`}>
          <Checkbox
            id={todo.id}
            checked={todo.done}
            color="red"
            onChange={onCheckboxChange(todo.id)}
          />
          <span className={todo.done ? styles['text-throught'] : ''}>{todo.name}</span>
          <div className={styles['actions']}>
            <Button color="cyan" onClick={() => startEditTodo(todo.id)}>
              Edit
            </Button>
            <Button color="red" onClick={() => deleteTodo(todo.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
};
