import { AxiosError } from 'axios';

import { http } from '@app-shared/services';
import { MockPost, MockTodo } from '@app-shared/types';

export const getDataById = async (id: string): Promise<MockPost> => {
  try {
    const result = await http.get<MockPost>(`/posts/${id}`);
    return result.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};

export const getPosts = async (): Promise<MockTodo[]> => {
  try {
    const result = await http.get<MockTodo[]>(`/posts`);
    return result.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(err.message);
  }
};
