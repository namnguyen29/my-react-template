import { useEffect } from "react";

import { Button, Container } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import dayjs from "dayjs";

import { DatePicker, TextInput } from "@app-shared/components";
import { DateFormat } from "@app-shared/enums";
import { InputValiation } from "@app-shared/types";
import { EMAIL_REGEX } from "@app-shared/constants";

type MyFormProps = {
  email: string;
  password: string;
  dateFrom: Date | null;
  dateTo: Date | null;
};

const emailFieldRules: InputValiation = {
  required: {
    value: true,
    message: "Required email input",
  },
  pattern: {
    value: EMAIL_REGEX,
    message: "Invalid email address",
  },
};

const passwordFieldRules: InputValiation = {
  required: {
    value: true,
    message: "Required password",
  },
  minLength: {
    value: 8,
    message: "Min is 8 chars",
  },
};

export const MyForm = () => {
  const formMethod = useForm<MyFormProps>({
    defaultValues: {
      email: "",
      password: "",
      dateFrom: null,
      dateTo: null,
    },
  });
  const {
    handleSubmit,
    formState: { errors },
  } = formMethod;
  const handleFormSubmit = handleSubmit((data) => {
    console.log("dayjs format::", dayjs(data.dateFrom).format(DateFormat.default));
    console.log("form-data::", data);
  });

  useEffect(() => {
    console.log("form-error: errors::", errors);
  }, [errors]);

  return (
    <FormProvider {...formMethod}>
      <Container component="form" onSubmit={handleFormSubmit}>
        <TextInput
          type="text"
          name="email"
          label="Email"
          placeholder="User Email"
          error={errors.email && `${errors.email.message}`}
          rules={emailFieldRules}
        />
        <TextInput
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
          error={errors.password && `${errors.password.message}`}
          rules={passwordFieldRules}
        />
        <DatePicker
          label="Date from"
          placeholder="Date from"
          format={DateFormat.default}
          name="dateFrom"
        />
        <DatePicker
          label="Date to"
          placeholder="Date to"
          format={DateFormat.default}
          name="dateTo"
        />
        <Button type="submit">Submit Me</Button>
      </Container>
    </FormProvider>
  );
};
