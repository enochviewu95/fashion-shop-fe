import { Fragment, useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Transition } from "@headlessui/react";
import Sewing from "../../assets/video/sewing_two.mp4";

export default function PromoSection({ background = true }) {
  const { lightBackground } = useContext(ThemeContext);

  const [toggleButton, setToggleButton] = useState(false);

  const isElementInViewport = (el) => {
    if (el === null) return;
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  };

  useEffect(() => {
    const elementsToShow = document.getElementById("animated");

    const scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000);
      };

    const loop = () => {
      if (isElementInViewport(elementsToShow)) {
        setToggleButton(true);
      } else {
        setToggleButton(false);
      }
      scroll(loop);
    };
    loop();
  }, []);

  return (
    <section
      className={
        background
          ? `relative overflow-hidden ${lightBackground}`
          : "relative overflow-hidden "
      }
    >
      <div className="absolute w-full hidden lg:block">
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
        className="w-full relative lg:backdrop-blur-sm lg:bg-black/30"
      >
        <Transition appear={true} show={toggleButton}>
          <div className="pt-16 h-full pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto h-full max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-[cubic-bezier(.01,.73,.35,1.35)] duration-500 delay-500 transform"
                  enterFrom="-translate-x-full opacity-0"
                  enterTo="translate-x-0 opacity-1"
                  leave="transition ease-[cubic-bezier(.01,.73,.35,1.35)] duration-500 delay-500 transform"
                  leaveFrom="translate-x-0 opacity-1"
                  leaveTo="-translate-x-full opacity-0"
                >
                  <h1 className="font text-4xl font-bold tracking-tight text-gray-700 lg:text-gray-200 sm:text-6xl">
                    Summer styles are finally here
                  </h1>
                </Transition.Child>
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-[cubic-bezier(.01,.73,0,1.2)] duration-500 delay-700 transform"
                  enterFrom="-translate-x-full opacity-0"
                  enterTo="translate-x-0 opacity-1"
                  leave="transition ease-[cubic-bezier(.01,.73,0,1.2)] duration-500 delay-700 transform"
                  leaveFrom="translate-x-0 opacity-1"
                  leaveTo="-translate-x-full opacity-0"
                >
                  <p className="mt-4 text-2xl text-gray-700 lg:text-gray-200">
                    This year, our new summer collection will shelter you from
                    the harsh elements of a world that doesn't care if you live
                    or die.
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
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                              alt=""
                              className="h-full w-full object-cover object-center"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
}
