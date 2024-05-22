import { Todo } from '@app-shared/types';

export type AddType = {
  type: 'add';
  payload: Todo;
};

export type ResetType = {
  type: 'reset';
  payload: Todo[];
};

export type DeleteType = {
  type: 'delete';
  payload: string;
};

export type CompletedType = {
  type: 'completed';
  payload: { id: string; done: boolean };
};

export type FinishType = {
  type: 'finish';
  payload: Todo | null;
};

export type CurrentStartType = {
  type: 'start';
  payload: Todo;
};

export type CurrentFinishType = {
  type: 'finish';
  payload: null;
};

export type CurrentEditType = {
  type: 'edit';
  payload: string;
};

export type Action = AddType | ResetType | DeleteType | FinishType | CompletedType;

export type CurrentAction = CurrentStartType | CurrentEditType | CurrentFinishType;

export type TodosReducer = (state: Todo[], action: Action) => Todo[];
export type TodoReducer = (state: Todo | null, action: CurrentAction) => Todo | null;
