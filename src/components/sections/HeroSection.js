import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function HeroSection({ banner }) {
  if (!banner) {
    return;
  }

  /***********************Animated Ui**********************/
  return (
    <Transition show={true} appear={true}>
      <section className="w-full relative">
        <Transition.Child
          as={Fragment}
          enter="transition ease-[cubic-bezier(.01,.73,.45,.99)] duration-300 delay-200 transform opacity"
          enterFrom="-translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
        >
          <div className="absolute w-full aspect-w-7 aspect-h-10 lg:aspect-h-3">
            <img
              className="w-full h-full object-cover object-center filter brightness-50"
              src={banner.imageUrl}
              alt={banner.title}
              width={1280}
              height={848}
              fetchpriority="high"
            />
          </div>
        </Transition.Child>
        <div className="w-full relative aspect-w-7 aspect-h-10 lg:aspect-h-3 flex-col justify-center">
          <div className="text-center rounded h-full items-center bg-black/10 flex flex-col justify-center content-center">
            <div className="max-w-lg">
              <Transition.Child
                as={Fragment}
                enter="transition ease-[cubic-bezier(.01,.73,.35,1.35)] duration-500 delay-500 transform"
                enterFrom="scale-0"
                enterTo="scale-100"
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-200 lg:text-6xl">
                  {banner.title}
                </h1>
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-[cubic-bezier(.01,.73,0,1.2)] duration-500 delay-700 transform"
                enterFrom="scale-0"
                enterTo="scale-100"
              >
                <p className="mt-6 text-lg leading-8 text-gray-200">
                  {banner.description}
                </p>
              </Transition.Child>
            </div>
          </div>
        </div>
      </section>
    </Transition>
  );
}
