import { baseHttp } from "@app-shared/services";
import { MockPost, MockTodo } from "@app-shared/types";

export const getDataById = (id: number) => {
  return baseHttp.get<MockPost>(`/posts/${id}`);
};

export const getPosts = () => {
  return baseHttp.get<MockTodo[]>(`/posts`);
};

export const mockApi = {
  getDataById,
  getPosts,
};
