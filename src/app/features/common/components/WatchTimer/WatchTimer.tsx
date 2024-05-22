import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import styles from './WatchTimer.module.scss';

type Props = {
  title: string;
};

type PropsRef = {
  classList?: DOMTokenList;
};

export const WatchTimer = forwardRef<PropsRef, Props>(({ title }, ref) => {
  const [count, setCount] = useState(0);
  // let intervalId: ReturnType<typeof setInterval>;
  const intervalRef = useRef<ReturnType<typeof setTimeout>>(null);
  // const containerRef = useRef<HTMLDivElement>(null);

  const divRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      classList: divRef.current?.classList
    };
  });

  useEffect(() => {
    let intervalId = intervalRef.current;
    intervalId = setTimeout(() => {
      setCount((prev) => prev + 2);
      console.log('re-render timer');
    }, 1000);

    return () => {
      console.log('un-mount');
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeBorder = (): void => {
    divRef.current?.classList.add(`${styles['border-red']}`);
  };

  return (
    <div
      ref={divRef}
      className="container"
      style={{
        border: '2px solid',
        padding: '1rem'
      }}
    >
      <p>{title}</p>
      <p>Read count: {count}</p>
      <button type="button" onClick={changeBorder}>
        Change border
      </button>
    </div>
  );
});
