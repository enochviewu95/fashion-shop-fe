import React from 'react'
import NavigationBar from '../components/widgets/NavigationBar'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { Link, NavLink, Outlet } from 'react-router-dom'

export default function Admin() {

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('Dashboard')

  return (
    <>
      <NavigationBar />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="-translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-sm">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute -right-9 top-0 mr-1 flex pl-2 pt-4 sm:-ml-10 sm:pl-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          Admin Dashboard
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <ul>
                          <li><NavLink to="/fashion-shop-fe/admin/">Dashboard</NavLink></li>
                          <li><NavLink to="/fashion-shop-fe/admin/home">Home</NavLink></li>
                          <li><NavLink to="/fashion-shop-fe/admin/about-us">About Us</NavLink></li>
                          <li><NavLink to="/fashion-shop-fe/admin/contact-us">Contact Us</NavLink></li>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl px-2 py-6 sm:px-6 lg:px-8 flex">
            <button
              type="button"
              className="rounded-md text-gray-900 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white px-3"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open panel</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <Outlet context={[setTitle]}/>
          </div>
        </main>
      </div>
    </>
  )
}
