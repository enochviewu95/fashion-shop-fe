import React from "react";
import { NavLink } from "react-router-dom";
import UnaMano from "../../assets/logo/una_mano.png";

export default function SideNavigationLinks() {
  return (
    <div className="flex h-screen flex-col bg-slate-100 py-6 shadow-xl z-50 fixed left-0 top-16 bottom-0">
      <div className="px-4 sm:px-6">
        <div className="text-md font-semibold leading-6 text-gray-900 py-4 border-b-2">
          <NavLink to="/">
            <div className="flex items-center flex-row">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-12 mix-blend-luminosity "
                  src={UnaMano}
                  alt="logo"
                  loading="lazy"
                />
              </div>
              <p>Admin Dashboard</p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="relative mt-6 flex-1 px-4 sm:px-6">
        <ul>
          <li>
            <NavLink
              to="/admin/"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 hover:bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/home/hero"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 hover:bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              }
            >
              Hero
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/home/categories"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 hover:bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              }
            >
              Categories
            </NavLink>
          </li>
          <li>
            {/* pathname: `/list/${item._id}`, search:"" */}
            <NavLink
              to={{ pathname: "/admin/home/products", search: "" }}
              className={({ isActive }) =>
                isActive
                  ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 hover:bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/home/collections"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-slate-900 hover:bg-amber-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              }
            >
              Collections
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
