import React from "react";
import { Outlet } from "react-router-dom";
import NewLetterSection from "../components/sections/NewsLetterSection";
import Navbar from "../components/widgets/Navbar";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
export default function Client() {
  return (
    <>
      <PerfectScrollbar className="absolute w-screen z-50">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <NewLetterSection />
      </PerfectScrollbar>
    </>
  );
}
