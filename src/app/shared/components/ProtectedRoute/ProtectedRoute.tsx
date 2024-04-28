import { ReactNode, useEffect } from "react";

import { useAuth } from "@app-shared/hooks";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isSignedIn, logout } = useAuth();

  useEffect(() => {
    if (!isSignedIn) {
      logout();
    }
  }, [isSignedIn, logout]);

  return children;
};
