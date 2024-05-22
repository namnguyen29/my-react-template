import { Action } from './types';

export const desAction = (payload: number): Action => ({
  type: 'des',
  payload
});

export const insAction = (payload: number): Action => ({
  type: 'ins',
  payload
});
