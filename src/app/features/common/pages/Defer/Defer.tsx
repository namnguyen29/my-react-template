import { FormProvider, useForm } from "react-hook-form";
import { useDebounce } from "@uidotdev/usehooks";
import { useQuery } from "@tanstack/react-query";

import { TextInput } from "@app-shared/components";
import { getDataById } from "@app-shared/apis";

export const Defer = () => {
  const methods = useForm<{
    demo: string;
  }>({
    defaultValues: {
      demo: "",
    },
  });
  const demoId = useDebounce(methods.watch("demo"), 350);
  const { data, isLoading, error } = useQuery({
    queryKey: ["postById", demoId],
    queryFn: () => getDataById(demoId || "1"),
  });

  return (
    <article>
      <div className="search-box">
        <FormProvider {...methods}>
          <TextInput label="Demo" name="demo" type="text" placeholder="Find your ID" />
        </FormProvider>
      </div>
      {isLoading && <p>IS LOADING ...</p>}
      {data ? (
        <>
          <ol>
            <li>ID: {data.id}</li>
            <li>Body: {data.body}</li>
            <li>Title: {data.title}</li>
            <li>UserId: {data.userId}</li>
          </ol>
        </>
      ) : (
        <h1>{error?.message}</h1>
      )}
    </article>
  );
};
