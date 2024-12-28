import { useState, useEffect } from 'react';

import { Progress } from '@mantine/core';
import { useLocation } from 'react-router-dom';

const MAX_PERCENT = 100;

export const AppProgress = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const isVisible = progress > 0 && progress < MAX_PERCENT;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prev) => Math.min(prev + Math.random() * 10, MAX_PERCENT));
    }, 30);

    return () => {
      clearInterval(intervalId);
      setProgress(0);
    };
  }, [location.pathname]);

  return <>{isVisible ? <Progress className="fixed top-0 w-full" value={progress} /> : null}</>;
};
