import { FormEvent } from "react";

import { Button } from "@mantine/core";

import styles from "./TaskInput.module.scss";
import { TextInput } from "@app-shared/components";
import { InputValiation } from "@app-shared/types";

type TaskInputProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  name: string;
  mode: "add" | "update";
  error?: string;
  editingValue?: string;
};

const inputRules: InputValiation = {
  required: {
    value: true,
    message: "Required task input value",
  },
};

export const TaskInput = ({ error, name, mode, editingValue, onSubmit }: TaskInputProps) => {
  return (
    <form className={styles["form-container"]} onSubmit={onSubmit}>
      <TextInput
        type="text"
        placeholder="Caption goes here"
        error={error}
        name={name}
        value={mode === "update" ? editingValue : ""}
        rules={inputRules}
      />
      <Button type="submit"> {mode === "add" ? "Add" : "Update"}</Button>
    </form>
  );
};
