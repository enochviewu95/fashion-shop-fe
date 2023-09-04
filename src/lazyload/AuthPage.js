import { lazy } from "react";

export const AuthLogin = lazy(() => import("../views/Authentications/Login"));
export const AuthSignup = lazy(() => import("../views/Authentications/Signup"));
export const AuthResetPassword = lazy(() => import("../views/Authentications/ResetPassword"));
export const AuthPasswordReset = lazy(() => import("../views/Authentications/PasswordReset"));