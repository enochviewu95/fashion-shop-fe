import { useContext } from "react"
import { ThemeContext } from "../../context/themeContext"
import atl from "../../assets/logo/atl.png"
import gtp from "../../assets/logo/gtp.png"
import printex from "../../assets/logo/printex.png"
import woodin from "../../assets/logo/woodin.png"


export default function TrustedBrandSection() {

  const {lightBackground} = useContext(ThemeContext)

    return (
      <div className={`py-24 sm:pb-32 ${lightBackground}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
              Our trusted brand of fabrics
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={atl}
              alt="atl"
              width={200}
              height={60}
              loading="lazy"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={printex}
              alt="printex"
              width={200}
              height={60}
              loading="lazy"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
              src={woodin}
              alt="woodin"
              width={200}
              height={60}
              loading="lazy"
            />
            <img
              className="col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1"
              src={gtp}
              alt="gtp"
              width={200}
              height={60}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    )
  }
  