import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../services/apis";

export const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function ProvideAuth({ children }) {
  const [userInfo, setUserInfo] = useState(null);
  
  const fetchLogin = async () => {
    const response = await getData("auth/login");
    if (response) {
      setUserInfo(response);
    }
  }
  useEffect(() => {
    fetchLogin();
  }, []);
  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
}
