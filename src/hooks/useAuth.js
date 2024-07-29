import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/authSlice";
import { useMemo } from "react";

export const useAuth = () => {
  const profile = useSelector(selectCurrentUser);
  return useMemo(() => profile, [profile]);
};
