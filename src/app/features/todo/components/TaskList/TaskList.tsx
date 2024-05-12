import { List, ListItem } from "@mantine/core";

import { TaskItem } from "./TaskItem/TaskItem";
import { Todo } from "@app-shared/types";
import "./TaskList.module.scss";

type TaskListProps = {
  title: string;
  taskList: Todo[];
  isEditing: boolean;
  editTask: (taskId: string, taskName: string) => void;
  deleteTask: (taskId: string) => void;
  onChangeStatus: (id: string, checked: boolean) => void;
};

export const TaskList = ({
  title,
  taskList,
  isEditing,
  deleteTask,
  editTask,
  onChangeStatus,
}: TaskListProps) => {
  return (
    <>
      <h2>{title}</h2>
      <List>
        {taskList.map((task, index) => (
          <ListItem key={`${task.id}-${index}`}>
            <TaskItem
              task={task}
              isEditing={isEditing}
              deleteTask={deleteTask}
              editTask={editTask}
              onChangeStatus={onChangeStatus}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};
