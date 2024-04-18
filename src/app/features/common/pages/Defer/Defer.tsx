import { useEffect, useRef, useState } from "react";

import { useForm, useWatch } from "react-hook-form";
import { AxiosError } from "axios";
import { debounce } from "lodash-es";

import { MockPost } from "@app-shared/types";
import { mockApi } from "@app-shared/apis";

export const Defer = () => {
  const [post, setPost] = useState<MockPost | null>(null);
  const [errorMsg, setErrorMsg] = useState("");
  const methods = useForm<{
    demo: string;
  }>();
  const demoFieldValue = useWatch<{
    demo: string;
  }>({
    name: "demo",
    control: methods.control,
    defaultValue: "",
  });

  const fetchDataById = useRef(
    debounce(async (id: number) => {
      try {
        const result = (await mockApi.getDataById(id)).data;
        setPost(result);
      } catch (err) {
        const error = err as AxiosError;
        setErrorMsg(error.message);
      }
    }, 300)
  ).current;

  useEffect(() => {
    fetchDataById(Number(demoFieldValue) || 1);
  }, [fetchDataById, demoFieldValue]);

  return (
    <article>
      {post ? (
        <>
          <ol>
            <li>ID: {post?.id}</li>
            <li>Body: {post?.body}</li>
            <li>Title: {post?.title}</li>
            <li>UserId: {post?.userId}</li>
          </ol>
        </>
      ) : (
        <h1>{errorMsg}</h1>
      )}
    </article>
  );
};
