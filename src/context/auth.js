import { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../services/apis";

export const authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    getData("auth/login")
      .then((registeredUser) => {
        if (registeredUser) {
          setUser(registeredUser);
        }
      })
      .catch((err) => {
        setUser(null);
      });
  }, [setUser]);
  return <authContext.Provider value={user}>{children}</authContext.Provider>;
}
