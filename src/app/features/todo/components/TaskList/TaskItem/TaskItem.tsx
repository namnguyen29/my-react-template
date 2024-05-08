import { Button } from "@mantine/core";
import clsx from "clsx";

import styles from "./TaskItem.module.scss";
import { Todo } from "@app-shared/types";
// import { Checkbox } from "@app-shared/components";

type TaskItemProps = {
  task: Todo;
  isEditing: boolean;
  deleteTask: (taskId: string) => void;
  editTask: (taskId: string, taskName: string) => void;
  onChangeStatus: (id: string, checked: boolean) => void;
};

export const TaskItem = ({
  task,
  isEditing,
  editTask,
  deleteTask,
  onChangeStatus,
}: TaskItemProps) => {
  const { id, done, name } = task;

  return (
    <div id={id} className={styles["item-container"]}>
      {/* <Checkbox
        name={`cb-${name}`}
        disabled={isEditing}
        onChange={(event) => onChangeStatus(id, event.currentTarget.checked)}
      /> */}

      <input
        type="checkbox"
        name={`cb-${name}`}
        disabled={isEditing}
        checked={done}
        onChange={(event) => {
          onChangeStatus && onChangeStatus(id, event.currentTarget.checked);
        }}
      />

      <p className={clsx(styles["content"], done && styles["text-through"])}>{name}</p>
      <Button
        color="yellow"
        className={styles["mr-25"]}
        disabled={done || isEditing}
        onClick={() => editTask(id, name)}
      >
        Edit
      </Button>

      <Button color="red" disabled={isEditing && !done} onClick={() => deleteTask(id)}>
        Delete
      </Button>
    </div>
  );
};
