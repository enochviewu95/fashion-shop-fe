import { Disclosure } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { NavLink } from "react-router-dom";
import UnaMano from "../../assets/logo/una_mano.png";

export default function SideNavigationLinks({setLoading}) {



  return (
    <div className="flex h-screen flex-col bg-slate-100 py-6 shadow-xl z-50 fixed left-0 top-16 bottom-0">
      <div className="px-4 sm:px-6">
        <div className="text-lg font-semibold leading-6 text-gray-900 py-4 border-b-2">
          <NavLink to="/fashion-shop-fe" onClick={()=>setLoading(true)}>
            <div className="flex items-center flex-row">
              <div className="rounded-full overflow-hidden">
                <img
                  className="w-24 mix-blend-luminosity "
                  src={UnaMano}
                  alt="logo"
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
            onClick={()=>setLoading(true)}
              to="/fashion-shop-fe/admin/"
              className={({ isActive }) =>
                isActive
                  ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                  : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className={
                      open
                        ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                        : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                    }
                  >
                    <span>Pages</span>
                    <ChevronRightIcon
                      className={`${
                        open ? "rotate-90 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-4 pt-2 pb-2 text-sm text-gray-500">
                    <ul>
                      <li>
                        <Disclosure>
                          {({ open }) => (
                            <>
                              <Disclosure.Button
                                className={
                                  open
                                    ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                    : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                }
                              >
                                <span>Home</span>
                                <ChevronRightIcon
                                  className={`${
                                    open ? "rotate-90 transform" : ""
                                  } h-5 w-5 text-purple-500`}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="pl-4 pt-2 pb-2 text-sm text-gray-500">
                                <ul>
                                  <li>
                                    <NavLink
                                      to="/fashion-shop-fe/admin/home/hero"
                                      onClick={()=>setLoading(true)}
                                      className={({ isActive }) =>
                                        isActive
                                          ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                          : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                      }
                                    >
                                      Hero
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/fashion-shop-fe/admin/home/categories"
                                      onClick={()=>setLoading(true)}
                                      className={({ isActive }) =>
                                        isActive
                                          ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                          : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                      }
                                    >
                                      Categories
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/fashion-shop-fe/admin/home/products"
                                      onClick={()=>setLoading(true)}
                                      className={({ isActive }) =>
                                        isActive
                                          ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                          : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                      }
                                    >
                                      Products
                                    </NavLink>
                                  </li>
                                  <li>
                                    <NavLink
                                      to="/fashion-shop-fe/admin/home/collections"
                                      onClick={()=>setLoading(true)}
                                      className={({ isActive }) =>
                                        isActive
                                          ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                          : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                                      }
                                    >
                                      Collections
                                    </NavLink>
                                  </li>
                                </ul>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      </li>
                      <li>
                        <NavLink
                          to="/fashion-shop-fe/admin/about-us"
                          onClick={()=>setLoading(true)}
                          className={({ isActive }) =>
                            isActive
                              ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                              : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                          }
                        >
                          About Us
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/fashion-shop-fe/admin/contact-us"
                          onClick={()=>setLoading(true)}
                          className={({ isActive }) =>
                            isActive
                              ? "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                              : "flex w-full justify-between rounded-lg  px-4 py-4 text-left text-md font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                          }
                        >
                          Contact Us
                        </NavLink>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
        </ul>
      </div>
    </div>
  );
}
