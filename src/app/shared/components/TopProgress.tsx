import { useEffect } from 'react';

import { nprogress, NavigationProgress } from '@mantine/nprogress';
import { useLocation } from 'react-router-dom';

export const TopProgress = () => {
  const location = useLocation();

  useEffect(() => {
    nprogress.start();
    const timerId = setTimeout(() => nprogress.complete(), 500);

    return () => clearTimeout(timerId);
  }, [location.key]);

  return <NavigationProgress color="violet" />;
};
