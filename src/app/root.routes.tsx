import { Suspense } from 'react';

import { createBrowserRouter, Outlet } from 'react-router-dom';

import { MainLayout } from '@app-containers/layouts';
import { Login } from '@app-features/auth/pages';
import { Dashboard, Defer, Home, Lunar, MyGridHome, ScrollSnap } from '@app-features/common/pages';
import { Ticket, Todo } from '@app-features/todo/pages';
import { DemoContextProvider } from '@app-shared/contexts';
import { AppModal, AppProgress, ErrorBoundary, ProtectedRoute } from '@app-shared/components';

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AppProgress />
        <AppModal />
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          {
            path: '/',
            element: (
              <DemoContextProvider>
                <Home />
              </DemoContextProvider>
            )
          },
          {
            path: '/dashboard',
            element: <Dashboard />
          },
          {
            path: '/todo',
            element: <Todo />
          },
          {
            path: '/ticket',
            element: (
              <ErrorBoundary>
                <Ticket />
              </ErrorBoundary>
            )
          },
          {
            path: '/defer',
            element: (
              <ProtectedRoute>
                <Defer />
              </ProtectedRoute>
            )
          },
          {
            path: '/scroll-snap',
            element: <ScrollSnap />
          },
          {
            path: '/grid-home',
            element: <MyGridHome />
          },
          {
            path: '/lunar',
            element: <Lunar />
          },
          {
            path: '/login',
            element: <Login />
          }
        ]
      }
    ]
  },

  {
    path: '*',
    element: <div>This is my 404 page, please redirect to login</div>
  }
]);
