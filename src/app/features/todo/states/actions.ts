import { Todo } from '@app-shared/types';
import { Action, CurrentAction } from './types';

export const addAction = (payload: Todo): Action => ({
  type: 'add',
  payload
});

export const finishAction = (payload: Todo | null): Action => ({
  type: 'finish',
  payload
});

export const resetAction = (payload: Todo[]): Action => ({
  type: 'reset',
  payload
});

export const deleteAction = (payload: string): Action => ({
  type: 'delete',
  payload
});

export const completedAction = (payload: { id: string; done: boolean }): Action => ({
  type: 'completed',
  payload
});

export const currentStartAction = (payload: Todo): CurrentAction => ({
  type: 'start',
  payload
});

export const currentFinishAction = (payload: null): CurrentAction => ({
  type: 'finish',
  payload
});

export const currentEditAction = (payload: string): CurrentAction => ({
  type: 'edit',
  payload
});
