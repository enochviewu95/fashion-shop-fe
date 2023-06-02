import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import LoadingComponent from "../components/widgets/LoadingComponent";


export default function Authentications() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="h-screen grid grid-cols-1 lg:grid-cols-2">
        <Outlet context={[setLoading]}></Outlet>
        <div className="login-image w-full h-screen hidden lg:block"></div>
      </div>
      <LoadingComponent
        showLoading={loading}
        setShowLoading={setLoading}
      />
    </>
  );
}
