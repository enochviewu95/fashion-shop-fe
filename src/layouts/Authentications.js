import React from "react";
import { Outlet } from "react-router-dom";

export default function Authentications() {

  return (
    <>
      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
        <Outlet/>
        <div className="login-image w-full h-screen hidden lg:block"></div>
      </div>
    </>
  );
}
