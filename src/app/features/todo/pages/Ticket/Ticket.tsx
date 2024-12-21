import { useEffect, useMemo, useReducer } from 'react';

import { TicketInput, TicketList } from '@app-features/todo/components';
import { Todo } from '@app-shared/types';
import { syncTicketToLocal } from '@app-shared/utils';
import {
  Action,
  CurrentAction,
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

type Employee = {
  name: string;
  age: number;
  city: string;
};

export const Ticket = () => {
  const [todos, dispatch] = useReducer<Todo[], Todo[], [action: Action]>(reducer, [], (arg) => arg);
  const [currentTodo, currentDispatch] = useReducer<Todo | null, null, [action: CurrentAction]>(
    currentReducer,
    null,
    (arg) => arg
  );

  const completedTodos = useMemo(() => todos.filter((todo) => todo.done), [todos]);
  const unCompletedTodos = useMemo(() => todos.filter((todo) => !todo.done), [todos]);

  useEffect(() => {
    const todoString = localStorage.getItem('todos');
    const todoObjects: Todo[] = JSON.parse(todoString ?? '[]');
    dispatch(resetAction(todoObjects));
    /////////////////////////////
    console.log('learn Map object here!!!');
    const employees: Employee[] = [
      { name: 'John', age: 25, city: 'New York' },
      { name: 'Emily', age: 30, city: 'Los Angeles' },
      { name: 'David', age: 35, city: 'Chicago' },
      { name: 'Sarah', age: 28, city: 'San Francisco' },
      { name: 'John', age: 32, city: 'Seattle' }
    ];
    const employeeSet = new Set<Employee>();
    employees.forEach((emp) => {
      employeeSet.add(emp);
    });

    console.log('view entries set::', employeeSet.entries());
    console.log('view values set::', employeeSet.values());

    console.log('view entries set clone::', [...employeeSet.entries()]);
    console.log('view values set clone::', [...employeeSet.values()]);
    console.log('no duplicate::', [...employeeSet]); // 5 phan tu

    /**
 * Note:
 *     // employeeSet.forEach(({ name, age, city }) => {
    //   console.log('loop a set::', { name, age, city });
    // });

    // const employeeMap = new Map<string, Employee>();

    // employees.forEach((emp) => {
    //   employeeMap.set(emp.name, emp);
    // });

    // for (const [key, value] of employeeMap) {
    //   console.log({ key, value });
    // }
 */
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
