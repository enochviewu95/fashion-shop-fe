import React, { useContext } from "react";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Navigate, Outlet } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import SideNavigationSlider from "../components/widgets/SideNavigationSlider";
import SideNavigationLinks from "../components/widgets/SideNavigationLinks";
import Navbar from "../components/widgets/Navbar";
import swal from "sweetalert";
import { useAuth } from "../hooks/useAuth";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Admin() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");

  const { lightBackground } = useContext(ThemeContext);
  const auth = useAuth();

  if (auth.response.role !== "admin") {
    swal("Sorry", "The page is reserved for administrators only", "info");
  }

  return auth.msg !== "failed" ? (
    auth.response.role === "admin" ? (
      <>
        <PerfectScrollbar className="absolute w-screen z-50">
          <div>
            <div className="fixed inset-x-0 z-50">
              <Navbar />
            </div>
            <SideNavigationSlider open={open} setOpen={setOpen} />
            <div className="flex">
              <div className="hidden lg:flex lg:mr-60">
                <SideNavigationLinks />
              </div>
              <div
                className={`w-full min-h-screen  ${lightBackground} overflow-y-auto mt-16 pb-32`}
              >
                <header className="bg-white shadow flex lg:hidden">
                  <div className="max-w-7xl px-2 py-6 sm:px-6 lg:px-8 flex">
                    <button
                      type="button"
                      className="rounded-md text-gray-900 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white px-3"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open panel</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                      {title}
                    </h1>
                  </div>
                </header>
                <main className="pt-6 px-4 lg:px-8">
                  <Outlet context={[setTitle]} />
                </main>
              </div>
            </div>
          </div>
        </PerfectScrollbar>
      </>
    ) : (
      <Navigate to="/" replace />
    )
  ) : (
    <Navigate to="/auth" replace />
  );
}
