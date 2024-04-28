import { lazy } from "react";

export const Todo = lazy(() => import("./Todo/Todo").then(({ Todo }) => ({ default: Todo })));
export const CompletedTodo = lazy(() =>
  import("./CompletedTodo/CompletedTodo").then(({ CompletedTodo }) => ({ default: CompletedTodo }))
);
