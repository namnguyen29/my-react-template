import { useEffect, useRef, useState } from 'react';

import { Button, Container } from '@mantine/core';

import { ChildTracker, MouseTracker, MyForm } from '@app-features/common/components';
import { useDemoContext } from '@app-shared/hooks';

export const Home = () => {
  const { theme, toggleAppTheme } = useDemoContext();
  const [count, setCount] = useState(0);
  const refCount = useRef(count);

  const increase = () => setCount((c) => c + 1);

  const decrease = () => setCount((c) => c - 1);

  useEffect(() => {
    refCount.current = count;
  }, [count]);

  console.log('cache count::', {
    count,
    cacheCount: refCount.current
  });

  return (
    <Container fluid component="article" className="border-2 border-red-600 sm:border-red-200">
      <Container component="section" className="border-2 border-violet-300">
        Hello world!
        <h1 className="text-3xl font-bold underline text-red-600">state: {count}</h1>
        <h1>ref count: {refCount.current}</h1>
        <Button onClick={increase} className="mr-1">
          +
        </Button>
        <Button onClick={decrease}>-</Button>
      </Container>

      <Container component="section" className="border-2 border-blue-400">
        <p>Change theme using Context: {theme}</p>
        <Button
          onClick={() => (theme === 'light' ? toggleAppTheme('dark') : toggleAppTheme('light'))}
        >
          Toggle Theme
        </Button>
      </Container>

      <Container component="section">
        <MouseTracker children={({ x, y }) => <ChildTracker x={x + 1} y={y + 1} />} />
        <MyForm />
      </Container>
    </Container>
  );
};
