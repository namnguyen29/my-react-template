import { useEffect } from "react";

import { Button } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";

import styles from "./TaskInput.module.scss";
import { TextInput } from "@app-shared/components";
import { InputValiation } from "@app-shared/types";

type TaskInputProps = {
  mode: "add" | "update";
  editingValue: { id: string; name: string };
  onSubmit: (data: { name: string }) => void;
};

const inputRules: InputValiation = {
  required: {
    value: true,
    message: "Required task input value",
  },
};

export const TaskInput = ({ editingValue, mode, onSubmit }: TaskInputProps) => {
  const formMethods = useForm<{ name: string }>({
    defaultValues: {
      name: "",
    },
  });
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = formMethods;

  useEffect(() => {
    setValue("name", editingValue.name);
  }, [editingValue, setValue]);

  return (
    <FormProvider {...formMethods}>
      <form
        className={styles["form-container"]}
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          setValue("name", "");
        })}
      >
        <TextInput
          type="text"
          placeholder="Caption goes here"
          error={errors.name?.message}
          name="name"
          rules={inputRules}
        />
        <Button type="submit">{mode === "add" ? "Add" : "Update"}</Button>
      </form>
    </FormProvider>
  );
};
