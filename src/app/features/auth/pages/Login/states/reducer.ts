import { StateReducer, State } from './types';

export const initState: State = {
  age: 20
};

export const reducer: StateReducer = (state, action) => {
  switch (action.type) {
    case 'ins':
      return { ...state, age: state.age + action.payload };
    case 'des':
      return { ...state, age: state.age - action.payload };
    default:
      throw new Error('huhu');
  }
};

// logger reducer
export const reducerLoger = (): StateReducer => (state, action) => {
  console.log('reducer - prev state::', state);
  const nextState = reducer(state, action);
  console.log('reducer - next state::', nextState);
  return nextState;
};
