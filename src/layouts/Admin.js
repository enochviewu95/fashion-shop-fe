import React, { useContext } from "react";
import NavigationBar from "../components/widgets/NavigationBar";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/themeContext";
import SideNavigationSlider from "../components/widgets/SideNavigationSlider";
import SideNavigationLinks from "../components/widgets/SideNavigationLinks";
import LoadingComponent from "../components/widgets/LoadingComponent";

export default function Admin() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("Dashboard");

  const { lightBackground } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div>
        <div className="fixed inset-x-0 z-50">
          <NavigationBar setLoading={setLoading} />
        </div>
        <SideNavigationSlider setLoading={setLoading} open={open} setOpen={setOpen} />
        <div className="flex h-full">
          <div className="hidden lg:flex lg:mr-72">
            <SideNavigationLinks />
          </div>
          <div className={`w-full ${lightBackground} overflow-y-auto mt-20`}>
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
              <Outlet context={[setTitle, setLoading]} />
            </main>
          </div>
        </div>
      </div>
      <LoadingComponent isLoading={loading} />
    </>
  );
}
