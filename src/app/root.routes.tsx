import { Suspense } from "react";

import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "@app-containers/layouts";
import { DemoContextProvider } from "@app-shared/contexts";
import { Dashboard, Defer, Home } from "@app-features/common/pages";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>IS LOADING...</div>}>
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
        element: <Defer />,
      },
    ],
  },
]);
