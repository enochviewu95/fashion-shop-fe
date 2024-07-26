import { createContext, useContext } from "react";
import { useSigninQuery } from "../redux/services/auth";

export const authContext = createContext({
  userInfo: null,
  loading: true,
  error: null,
});

export function useAuth() {
  return useContext(authContext);
}

export function ProvideAuth({ children }) {
  const { data: userInfo, isLoading, error } = useSigninQuery();
  const contextValue = {
    userInfo,
    isLoading,
    error,
  };

  return (
    <authContext.Provider value={contextValue}>{children}</authContext.Provider>
  );
}
