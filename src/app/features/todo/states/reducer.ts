import { Todo } from '@app-shared/types';
import { TodoReducer, TodosReducer } from './types';

export const initCurrentTodo: Todo | null = null;

export const reducer: TodosReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'finish':
      return state.map((todo) => (todo.id === action.payload?.id ? action.payload : todo));
    case 'reset':
      return [...action.payload];
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    case 'completed':
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: action.payload.done } : todo
      );
    default:
      throw new Error('huhu');
  }
};

export const currentReducer: TodoReducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, ...action.payload };
    case 'finish':
      return null;
    case 'edit':
      return { ...state, name: action.payload } as Todo;
    default:
      throw new Error('hihi');
  }
};

// // logger reducer
// export const reducerLoger = (): StateReducer => (state, action) => {
//   console.log('reducer - prev state::', state);
//   const nextState = reducer(state, action);
//   console.log('reducer - next state::', nextState);
//   return nextState;
// };
