import { AxiosError } from "axios";

import { baseHttp } from "@app-shared/services";
import { MockPost, MockTodo } from "@app-shared/types";

export const getDataById = async (id: string): Promise<MockPost> => {
  try {
    const result = await baseHttp.get<MockPost>(`/posts/${id}`);
    return result.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};

export const getPosts = async (): Promise<MockTodo[]> => {
  try {
    const result = await baseHttp.get<MockTodo[]>(`/posts`);
    return result.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};
