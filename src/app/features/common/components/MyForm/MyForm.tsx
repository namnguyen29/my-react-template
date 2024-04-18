import { Button, Container } from "@mantine/core";
import { FormProvider, useForm } from "react-hook-form";
import dayjs from "dayjs";

import { DatePicker, TextInput } from "@app-shared/components";
import { DateFormat } from "@app-shared/enums";

type MyFormProps = {
  email: string;
  password: string;
  dateFrom: Date | null;
  dateTo: Date | null;
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
  const { handleSubmit } = formMethod;
  const handleFormSubmit = handleSubmit((data) => {
    console.log("dayjs format::", dayjs(data.dateFrom).format(DateFormat.default));
    console.log("form-data::", data);
  });

  return (
    <FormProvider {...formMethod}>
      <Container component="form" onSubmit={handleFormSubmit}>
        <TextInput type="email" name="email" label="Email" placeholder="User Email" />
        <TextInput type="password" name="password" label="Password" placeholder="Password" />
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
