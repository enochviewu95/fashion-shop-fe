import React from "react";
import { Outlet } from "react-router-dom";
import NewLetterSection from "../components/sections/NewsLetterSection";
import Navbar from "../components/widgets/Navbar";

export default function Client() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <NewLetterSection />
    </>
  );
}
