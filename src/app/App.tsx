import { RouterProvider } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { rootRouter } from './root.routes';
import { appQueryClient, appTheme } from '@app-core/configs';

export const App = () => (
  <QueryClientProvider client={appQueryClient}>
    <MantineProvider theme={appTheme}>
      <RouterProvider router={rootRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </MantineProvider>
  </QueryClientProvider>
);
