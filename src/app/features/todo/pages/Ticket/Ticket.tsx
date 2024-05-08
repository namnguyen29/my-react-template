import { useEffect, useMemo, useState } from 'react';

import { TicketInput, TicketList } from '@app-features/todo/components';
import { Todo } from '@app-shared/types';
import { syncTicketToLocal } from '@app-shared/utils';

export const Ticket = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null);
  const completedTodos = useMemo(() => todos.filter((todo) => todo.done), [todos]);
  const unCompletedTodos = useMemo(() => todos.filter((todo) => !todo.done), [todos]);

  useEffect(() => {
    const todoString = localStorage.getItem('todos');
    const todoObjects: Todo[] = JSON.parse(todoString || '[]');
    setTodos(todoObjects);
  }, []);

  const addTodo = (name: string): void => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    };
    setTodos((prev) => prev.concat(todo));
    syncTicketToLocal<Todo>((prev) => prev.concat(todo));
  };

  const handleCompletedTodo = (id: string, done: boolean): void => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? { ...todo, done } : todo)));
  };

  const startEditTodo = (id: string): void => {
    const findedTodo = todos.find((todo) => todo.id === id);
    if (findedTodo) {
      setCurrentTodo(findedTodo);
    }
  };

  const editTodo = (name: string): void => {
    setCurrentTodo((prev) => prev && { ...prev, name });
  };

  const finishEditTodo = (): void => {
    setTodos((prev) => prev.map((todo) => (todo.id === currentTodo?.id ? currentTodo : todo)));
    setCurrentTodo(null);

    syncTicketToLocal<Todo>((todos) =>
      todos.map((todo) => (todo.id === currentTodo?.id ? currentTodo : todo))
    );
  };

  const deleteTodo = (id: string): void => {
    if (currentTodo) {
      setCurrentTodo(null);
    }
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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
