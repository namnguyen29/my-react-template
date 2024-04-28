import { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";

import styles from "./Todo.module.scss";
import { TaskInput, TaskList } from "@app-features/todo/components";
import { Todo as TodoType } from "@app-shared/types";
import { generateRandomId } from "@app-shared/utils";

export const Todo = () => {
  const [taskList, setTaskList] = useState<TodoType[]>([]);
  const [formMode, setFormMode] = useState<"add" | "update">("add");
  const formMethods = useForm<{ task: string; id: string }>({
    defaultValues: {
      task: "",
      id: "",
    },
  });
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = formMethods;
  const editingValue = watch("task");

  const handleSubmitForm = handleSubmit((data) => {
    if (formMode === "add") {
      setTaskList((prev) => {
        const task = {
          name: data.task,
          id: generateRandomId(),
          done: false,
        };
        return [...prev, task];
      });
      setValue("task", "");
      setValue("id", "");
      return;
    }
    const modifyTasks = taskList.map((task) => {
      if (task.id === data.id) {
        task.name = data.task;
      }
      return task;
    });
    setTaskList(modifyTasks);
    setValue("task", "");
    setFormMode("add");
  });

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
    setFormMode("update");
    console.log({ id, name });
    setValue("task", name);
    setValue("id", id);
  };

  return (
    <article className={styles["todo-container"]}>
      <FormProvider {...formMethods}>
        <h2>My Todo list</h2>
        <TaskInput
          name="task"
          mode={formMode}
          editingValue={editingValue}
          error={errors.task && errors.task.message}
          onSubmit={handleSubmitForm}
        />

        {taskList.length > 0 && taskList.some((task) => !task.done) && (
          <TaskList
            title="Incomplete"
            isEditing={formMode === "update" ? true : false}
            taskList={taskList.filter((task) => !task.done)}
            deleteTask={handleDeleteTask}
            editTask={handleEditTask}
            onChangeStatus={handleChangeStatus}
          />
        )}
        {taskList.length > 0 && taskList.some((task) => task.done) && (
          <TaskList
            title="Complete"
            isEditing={formMode === "update" ? true : false}
            taskList={taskList.filter((task) => task.done)}
            deleteTask={handleDeleteTask}
            editTask={handleEditTask}
            onChangeStatus={handleChangeStatus}
          />
        )}
      </FormProvider>
    </article>
  );
};
