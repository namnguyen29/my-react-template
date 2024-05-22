import { useContext, useDebugValue } from 'react';

import { DemoContext } from '@app-shared/contexts';

export const useDemoContext = () => {
  const { theme, setTheme } = useContext(DemoContext);
  useDebugValue(theme === 'dark' ? 'vai leu dark' : 'uwu light');

  const toggleAppTheme = (value: 'light' | 'dark'): void => {
    setTheme(value);
  };

  return {
    theme,
    toggleAppTheme
  };
};
