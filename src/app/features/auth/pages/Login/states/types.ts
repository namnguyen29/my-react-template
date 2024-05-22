export type State = {
  age: number;
};

export type Action = {
  type: 'ins' | 'des';
  payload: number;
};

export type StateReducer = (state: State, action: Action) => State;
