import { useEffect, useMemo, useReducer } from 'react';

import { TicketInput, TicketList } from '@app-features/todo/components';
import { Todo } from '@app-shared/types';
import { syncTicketToLocal } from '@app-shared/utils';
import {
  TodoReducer,
  TodosReducer,
  addAction,
  completedAction,
  currentEditAction,
  currentFinishAction,
  currentReducer,
  currentStartAction,
  deleteAction,
  finishAction,
  reducer,
  resetAction
} from '@app-features/todo/states';

export const Ticket = () => {
  const [todos, dispatch] = useReducer<TodosReducer, Todo[]>(reducer, [], (arg) => arg);
  const [currentTodo, currentDispatch] = useReducer<TodoReducer, Todo | null>(
    currentReducer,
    null,
    (arg) => arg
  );

  const completedTodos = useMemo(() => todos.filter((todo) => todo.done), [todos]);
  const unCompletedTodos = useMemo(() => todos.filter((todo) => !todo.done), [todos]);

  useEffect(() => {
    const todoString = localStorage.getItem('todos');
    const todoObjects: Todo[] = JSON.parse(todoString || '[]');
    dispatch(resetAction(todoObjects));
  }, []);

  const addTodo = (name: string): void => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    };
    dispatch(addAction(todo));
    syncTicketToLocal<Todo>((prev) => prev.concat(todo));
  };

  const handleCompletedTodo = (id: string, done: boolean): void => {
    dispatch(completedAction({ id, done }));
  };

  const startEditTodo = (id: string): void => {
    const findedTodo = todos.find((todo) => todo.id === id);
    if (findedTodo) {
      currentDispatch(currentStartAction(findedTodo));
    }
  };

  const editTodo = (name: string): void => {
    currentDispatch(currentEditAction(name));
  };

  const finishEditTodo = (): void => {
    dispatch(finishAction(currentTodo));
    currentDispatch(currentFinishAction(null));

    syncTicketToLocal<Todo>((todos) =>
      todos.map((todo) => (todo.id === currentTodo?.id ? currentTodo : todo))
    );
  };

  const deleteTodo = (id: string): void => {
    if (currentTodo) {
      currentDispatch(currentFinishAction(null));
    }
    dispatch(deleteAction(id));
    syncTicketToLocal<Todo>((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <article>
      <TicketInput
        currentTodo={currentTodo}
        finishEditTodo={finishEditTodo}
        addTodo={addTodo}
        editTodo={editTodo}
      />
      <TicketList
        todos={unCompletedTodos}
        deleteTodo={deleteTodo}
        startEditTodo={startEditTodo}
        handleCompletedTodo={handleCompletedTodo}
      />
      <TicketList
        doneTaskList
        todos={completedTodos}
        deleteTodo={deleteTodo}
        startEditTodo={startEditTodo}
        handleCompletedTodo={handleCompletedTodo}
      />
    </article>
  );
};
