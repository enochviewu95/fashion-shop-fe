import React, { useContext } from 'react'
import PromoSection from '../../components/sections/PromoSection'
import StatsSection from '../../components/sections/StatsSection';
import TeamSection from '../../components/sections/TeamSection';
import TrustedBrandSection from '../../components/sections/TrustedBrandSection';
import { ThemeContext } from '../../context/themeContext';

export default function AboutUsView() {


  const background = false;
  const gridArrangement = "column"
  const padding = "py-20"
  const { startBackground, stopBackground, deepBackground } = useContext(ThemeContext)

  return (
    <div>
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
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
                <stop stopColor={{ startBackground }} />
                <stop offset={1} stopColor={{ stopBackground }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <PromoSection/>
      <div className={` ${deepBackground}`}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className='grid grid-cols-1 lg:grid-cols-2 '>
            <div className='pt-24 sm:py-32'>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
              </p>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
              <p className="mt-6">
                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                turpis ipsum eu a sed convallis diam.
              </p>
            </div>
            <StatsSection gridArrangement={gridArrangement} background={background} padding={padding} />
          </div>
        </div>
      </div>
      <TrustedBrandSection />
      <TeamSection />
    </div>
  )
}
