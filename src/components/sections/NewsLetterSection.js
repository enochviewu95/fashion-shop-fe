import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Link } from "react-router-dom";

export default function NewLetterSection() {
  const {
    primaryBackground,
    secondaryTextColor,
    textInputBackground,
    startBackground,
    stopBackground,
    buttonBackground,
    buttonHoverBackground,
  } = useContext(ThemeContext);

  return (
    <div
      className={`relative isolate overflow-hidden ${primaryBackground} py-16 sm:py-24 lg:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2
              className={`text-3xl font-bold tracking-tight ${secondaryTextColor} sm:text-4xl`}
            >
              Subscribe to our newsletter.
            </h2>
            <p className={`mt-4 text-lg leading-8 ${secondaryTextColor}`}>
              Get newsletters and updates from us about our new products and the
              latest trend in Ghanaian fashion
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`min-w-0 flex-auto rounded-md border-0 ${textInputBackground} px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6`}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className={`flex-none rounded-md ${buttonBackground} py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:${buttonHoverBackground} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500`}
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div className="flex flex-col items-start">
              <p className={`leading-7 ${secondaryTextColor}`}>Miss S Pollard</p>
              <p className={`leading-7 ${secondaryTextColor}`}>1 Chapel Hill</p>
              <p className={`leading-7 ${secondaryTextColor}`}>Heswall</p>
              <p className={`leading-7 ${secondaryTextColor}`}>Bournemouth</p>
              <p className={`leading-7 ${secondaryTextColor}`}>BH1 1AA</p>
              <p className={`leading-7 ${secondaryTextColor}`}>+45434343834</p>
            </div>
            <div className="flex flex-col items-start">
              <ul>
                <li>
                  <Link
                    className={`mt-2 leading-7 ${secondaryTextColor}`}
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`mt-2 leading-7 ${secondaryTextColor}`}
                    to="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className={`mt-2 leading-7 ${secondaryTextColor}`}
                    to="/about/"
                  >
                    About us
                  </Link>
                </li>
              </ul>
            </div>
          </dl>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
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
  );
}
