import React, { useContext } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import UnaMano from "../../assets/logo/una_mano.png";
import { ThemeContext } from "../../context/themeContext";
import { useAuth } from "../../context/auth";
import { saveData } from "../../services/apis";
import { useDispatch } from "react-redux";
import { logoutUserAsync } from "../../redux/userSlice";

const navigation = [
  { name: "Home", href: "/fashion-shop-fe/" },
  { name: "About Us", href: "/fashion-shop-fe/about-us" },
  { name: "Contact Us", href: "/fashion-shop-fe/contact-us" },
];

function classNames(...classes) {
  console.log(classes);
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ setLoading }) {
  const { primaryBackground } = useContext(ThemeContext);
  const auth = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    setLoading(true);
    saveData("/auth/logout")
      .then((response) => {
        if (response) {
          dispatch(logoutUserAsync());
          navigate("/fashion-shop-fe/auth");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header className="z-50 relative ">
      <Disclosure as="nav" className={primaryBackground}>
        {({ open }) => (
          <>
            <div className="px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to="/fashion-shop-fe">
                    <div className="flex flex-shrink-0 items-center mix-blend-luminosity rounded-full">
                      <img
                        className="block h-12 w-auto lg:hidden"
                        src={UnaMano}
                        alt="Una Mano"
                      />
                      <img
                        className="hidden h-12 w-auto lg:block"
                        src={UnaMano}
                        alt="Una Mano"
                      />
                    </div>
                  </Link>
                  <div className="hidden py-2 sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) =>
                            isActive
                              ? "bg-amber-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                              : "text-gray-300 hover:bg-amber-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                      {auth.status !== "failed" ? (
                        auth.user.role === "admin" ? (
                          <NavLink
                            key="Dashboard"
                            to="/fashion-shop-fe/admin"
                            className={({ isActive }) =>
                              isActive
                                ? "bg-amber-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                : "text-gray-300 hover:bg-amber-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                            }
                          >
                            Dashboard
                          </NavLink>
                        ) : (
                          ""
                        )
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                {auth.status !== "failed" ? (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="rounded-full bg-amber-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                onClick={logout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </Link>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                ) : (
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <Link
                      to="/fashion-shop-fe/auth"
                      className="rounded shadow bg-amber-800 py-1 px-3 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? "bg-amber-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
}
