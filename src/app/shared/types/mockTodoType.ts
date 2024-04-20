export type MockTodo = {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
};

export type MockPost = {
  body: string;
  id: number;
  title: string;
  userId: string;
};

export type MockRequestData = Pick<MockTodo, "title" | "userId"> & {
  body: string;
};

export type MockResponseData = Pick<MockTodo, "title" | "userId"> & {
  body: string;
  id: number;
};

export type Todo = {
  done: boolean;
  name: string;
  id: string;
};
