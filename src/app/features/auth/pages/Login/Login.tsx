import {
  useEffect,
  useReducer,
  // useLayoutEffect, // no paint layout, but it will block your UI a litte bit
  useRef,
  // useLayoutEffect,
  useState
} from 'react';

import {
  //reducer,
  initState,
  insAction,
  desAction,
  reducerLoger,
  Action,
  State
} from './states';

/**
 *        state, setState     useState           (value)
 * const [state, dispatch] = useReducer(reducer, initArg, init);
 */

export const Login = () => {
  const [width, setWidth] = useState(0);
  const [state, dispatch] = useReducer<State, State, [action: Action]>(
    reducerLoger(),
    initState,
    (arg) => arg
  );
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => setWidth(divRef.current?.offsetWidth ?? 0);
    addEventListener('resize', measure);

    return () => {
      removeEventListener('resize', measure);
    };
  }, []);

  return (
    <div ref={divRef}>
      <button onClick={() => setWidth((prev) => prev + 1)}>Increase Width</button>
      <p style={{ background: 'red' }}>login</p>
      {width > 300 && <p style={{ background: 'yellow' }}>current: {width}</p>}

      <button onClick={() => dispatch(insAction(2))}>Increase</button>
      <button onClick={() => dispatch(desAction(4))}>Descrease</button>
      <p>age: {state.age}</p>
    </div>
  );
};

// example of useReducer
// type State = {
//   age: number;
// };

// type Reducer = (state: State, action: 'ins' | 'des')  ===> State;

// const [state, dispatch] = useReducer<Reducer, State>(
//     (state, action) => {
//       if (action === 'ins') {
//         return { ...state, age: state.age + 1 };
//       }
//       if (action === 'des') {
//         return { ...state, age: state.age - 1 };
//       }
//       throw new Error('wrong action, please try again');
//     },
//     { age: 20 },
//     (arg) => arg
//   );
