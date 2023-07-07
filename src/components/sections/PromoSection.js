import { Fragment, useContext, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Transition } from "@headlessui/react";
import Sewing from "../../assets/video/sewing_two.mp4";
import promo from "../../assets/images/promo.webp";
import useOnScreen from "../../hooks/useOnScreen";

export default function PromoSection({ background = true }) {
  const { lightBackground } = useContext(ThemeContext);

  const ref = useRef(null)
  const isVisible = useOnScreen(ref);

  return (
    <section
      className={
        background
          ? `relative overflow-hidden ${lightBackground}`
          : "relative overflow-hidden "
      }
    >
      <div className="h-screen">
        <div className="absolute w-full h-full hidden lg:block">
          <video
            className="w-full"
            preload="auto"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Sewing} type="video/mp4" />
          </video>
        </div>
        <div
          id="animated"
          className="w-full h-full relative lg:backdrop-blur-sm lg:bg-black/60"
          ref={ref}
        >
          <Transition appear={true} show={isVisible}>
            <div className="pt-16 h-full pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto h-full max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-[cubic-bezier(.01,.73,.35,1.35)] duration-500 delay-100 transform"
                    enterFrom="-translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-1"
                  >
                    <h1 className="font text-4xl font-bold tracking-tight text-gray-700 lg:text-gray-200 lg:text-6xl">
                      Crafted Ghanaian Elegance
                    </h1>
                  </Transition.Child>
                  <Transition.Child
                    as={Fragment}
                    enter="transition ease-[cubic-bezier(.01,.73,0,1.2)] duration-500 delay-200 transform"
                    enterFrom="-translate-x-full opacity-0"
                    enterTo="translate-x-0 opacity-1"
                  >
                    <p className="mt-4 lg:text-2xl text-lg leading-8 text-gray-700 lg:text-gray-200">
                      Discover Ghanaian clothing, meticulously handcrafted with
                      passion and precision, showcasing the artistry and
                      heritage that make each piece truly exceptional.
                    </p>
                  </Transition.Child>
                </div>
                <div>
                  <div className="mt-10">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                    >
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                          <Transition.Child
                            as={Fragment}
                            enter="transition ease-out duration-500 delay-700 transform"
                            enterFrom="translate-x-full opacity-0"
                            enterTo="translate-x-0 opacity-1"
                          >
                            <div className="h-[45rem] w-[40rem] overflow-hidden rounded-lg">
                              <img
                                src={promo}
                                alt="promo"
                                className="h-full w-full object-cover object-center"
                                loading="lazy"
                              />
                            </div>
                          </Transition.Child>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
}
