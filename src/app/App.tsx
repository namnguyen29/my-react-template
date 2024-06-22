import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { rootRouter } from './root.routes';
import { appQueryClient, appTheme } from '@app-core/configs';
import { QueryClientProvider } from '@tanstack/react-query';

export const App = () => {
  return (
    <QueryClientProvider client={appQueryClient}>
      <MantineProvider theme={appTheme}>
        <RouterProvider router={rootRouter} />
      </MantineProvider>
    </QueryClientProvider>
  );
};
