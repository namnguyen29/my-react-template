import { useState } from 'react';

import styles from './Todo.module.scss';
import { TaskInput, TaskList } from '@app-features/todo/components';
import { Todo as TodoType } from '@app-shared/types';
import { generateRandomId } from '@app-shared/utils';

export const Todo = () => {
  const [taskList, setTaskList] = useState<TodoType[]>([]);
  const [mode, setMode] = useState<'update' | 'add'>('add');
  const [editValue, setEditValue] = useState<{ id: string; name: string }>({
    id: '',
    name: ''
  });

  const handleSubmitForm = (data: { name: string }): void => {
    if (mode === 'add') {
      setTaskList((prev) => {
        const task = {
          name: data.name,
          id: generateRandomId(),
          done: false
        };
        return [...prev, task];
      });
      return;
    }
    const modifyTasks = taskList.map((task) => {
      if (task.id === editValue.id) {
        task.name = data.name;
      }
      return task;
    });
    setTaskList(modifyTasks);
    setMode('add');
  };

  const handleDeleteTask = (taskId: string): void => {
    setTaskList((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleChangeStatus = (id: string, checked: boolean): void => {
    const modifyTasks = taskList.map((task) => {
      if (task.id === id) {
        task.done = checked;
      }
      return task;
    });
    setTaskList(modifyTasks);
  };

  const handleEditTask = (id: string, name: string): void => {
    setMode('update');
    setEditValue({ id, name });
  };

  return (
    <article className={styles['todo-container']}>
      <h2>My Todo list</h2>
      <TaskInput mode={mode} editingValue={editValue} onSubmit={handleSubmitForm} />

      {taskList.length > 0 && taskList.some((task) => !task.done) && (
        <TaskList
          title="Incomplete"
          isEditing={mode === 'update'}
          taskList={taskList.filter((task) => !task.done)}
          deleteTask={handleDeleteTask}
          editTask={handleEditTask}
          onChangeStatus={handleChangeStatus}
        />
      )}
      {taskList.length > 0 && taskList.some((task) => task.done) && (
        <TaskList
          title="Complete"
          isEditing={mode === 'update'}
          taskList={taskList.filter((task) => task.done)}
          deleteTask={handleDeleteTask}
          editTask={handleEditTask}
          onChangeStatus={handleChangeStatus}
        />
      )}
    </article>
  );
};
