import React, { useContext } from 'react'
import { useState } from 'react'


import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { EllipsisVerticalIcon, XMarkIcon } from '@heroicons/react/24/outline'

import UnaMano from "../../assets/logo/una_mano.png"
import { ThemeContext } from '../../themeContext'

const navigation = [
    { name: 'Home', href: '/fashion-shop-fe' },
    { name: 'About Us', href: '/fashion-shop-fe/about-us' },
    { name: 'Contact Us', href: '/fashion-shop-fe/contact-us' },
]

export default function NavigationBar() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const {primaryBackground, primaryTextColor,secondaryTextColor} = useContext(ThemeContext)

    // const user_sesssion = sessionStorage.getItem()

    return (
        <header className={`relative z-40 h-20 ${primaryBackground}`}>
            <nav className="flex items-center justify-between px-3 lg:p-1 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/fashion-shop-fe" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <div
                            className=" mix-blend-luminosity rounded-full overflow-hidden">
                            <img className='w-24' src={UnaMano} alt="logo" />
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${secondaryTextColor}`}
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <Link key={item.name} to={item.href} className={`text-sm font-semibold leading-6 ${primaryTextColor}`}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/fashion-shop-fe/register" className={`text-sm font-semibold leading-6 ${primaryTextColor}`}>
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto ${primaryBackground} px-6 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}>
                    <div className="flex items-center justify-between">
                        <Link to="/fashion-shop-fe" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Your Company</span>
                            <div
                                className="mix-blend-luminosity rounded-full overflow-hidden">
                                <img className='w-20' src={UnaMano} alt="logo" />
                            </div>
                        </Link>
                        <button
                            type="button"
                            className={`-m-2.5 rounded-md p-2.5 ${primaryTextColor}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 ${secondaryTextColor} hover:bg-gray-50`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/fashion-shop-fe/login"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 ${secondaryTextColor} hover:bg-gray-50`}
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

    )
}
