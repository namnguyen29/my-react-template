import { Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@app-containers/layouts";
import { Login } from "@app-features/auth/pages";
import { Dashboard, Defer, Home } from "@app-features/common/pages";
import { DemoContextProvider } from "@app-shared/contexts";
import { ProtectedRoute } from "@app-shared/components";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Is Loading...</div>}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <DemoContextProvider>
            <Home />
          </DemoContextProvider>
        ),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/defer",
        element: (
          <ProtectedRoute>
            <Defer />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
