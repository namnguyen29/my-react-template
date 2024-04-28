import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigate = useNavigate();
  const accessToken = "asdi3453485HFHHF";
  const isSignedIn = true;

  const logout = () => navigate("/login", { replace: true });

  return {
    accessToken,
    isSignedIn,
    logout,
  };
};
