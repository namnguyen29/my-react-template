import { Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@app-containers/layouts';
import { Login } from '@app-features/auth/pages';
import { Dashboard, Defer, Home, Lunar, MyGridHome, ScrollSnap } from '@app-features/common/pages';
import { Ticket, Todo } from '@app-features/todo/pages';
import { DemoContextProvider } from '@app-shared/contexts';
import { ErrorBoundary, Modal, ProtectedRoute } from '@app-shared/components';

export const rootRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>Is Loading...</div>}>
        <ErrorBoundary>
          <MainLayout />
          <Modal />
        </ErrorBoundary>
      </Suspense>
    ),
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
        element: <Ticket />
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
        path: '*',
        element: <div>This is my 404 page, please redirect to login</div>
      }
    ]
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
]);
