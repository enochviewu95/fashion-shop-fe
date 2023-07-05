import { useContext, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import PhoneInput from "react-phone-number-input";

import "react-phone-number-input/style.css";

export default function ContactUsView() {
  const {
    lightBackground,
    startBackground,
    stopBackground,
    textInputBackground,
    buttonBackground,
    buttonHoverBackground,
  } = useContext(ThemeContext);

  const [query, setQuery] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
    title: "",
  });

  function submitQuery(event){
    event.preventDefault();
    let emailTo = "viewuenoch@gmail.com"
    let emailSub = query.title
    let emailBody = `${query.message}%0A${query.firstName} ${query.lastName}%0A${query.email}%0A${query.phoneNumber}`
    window.open('mailto:'+emailTo+'?subject='+emailSub+'&body='+emailBody, '_self');
  };

  return (
    <div className={`isolate ${lightBackground} py-40 px-6 sm:py-32 lg:px-8`}>
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-1/2 -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-40rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={startBackground} />
              <stop offset={1} stopColor={stopBackground} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Get in touch with us for any questions and to place an order
        </p>
      </div>
      <form
        id="query-form"
        method="POST"
        onSubmit={submitQuery}
        encType="text/plain"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Ex. John"
                value={query.firstName}
                onChange={(event) =>
                  setQuery({ ...query, firstName: event.target.value })
                }
                autoComplete="given-name"
                className={`block w-full rounded-md border-0 py-2 px-3.5 ${textInputBackground} text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Ex. Doe"
                value={query.lastName}
                onChange={(event) =>
                  setQuery({ ...query, lastName: event.target.value })
                }
                autoComplete="family-name"
                className={`block w-full rounded-md border-0 py-2 px-3.5 ${textInputBackground} text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex. johndoe@gmail.com"
                value={query.email}
                onChange={(event) =>
                  setQuery({ ...query, email: event.target.value })
                }
                autoComplete="email"
                className={`block w-full rounded-md border-0 py-2 px-3.5 ${textInputBackground} text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div
                className={`block w-fit rounded-md border-0 ${textInputBackground} text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6`}
              >
                <PhoneInput
                  placeholder="Enter phone number"
                  defaultCountry="GH"
                  value={query.phoneNumber}
                  onChange={(value) => {
                    setQuery({ ...query, phoneNumber: value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="title"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Title
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Place an order or make a query for ..."
                value={query.title}
                autoComplete="title-name"
                onChange={(event) =>
                  setQuery({ ...query, title: event.target.value })
                }
                className={`block w-full rounded-md border-0 py-2 px-3.5 ${textInputBackground} text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                placeholder="Enter your message here ..."
                value={query.message}
                onChange={(event) =>
                  setQuery({ ...query, message: event.target.value })
                }
                className={`block w-full rounded-md border-0 py-2 px-3.5 ${textInputBackground} text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-amber-600 sm:text-sm sm:leading-6`}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`block w-full rounded-md ${buttonBackground} px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:${buttonHoverBackground} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
