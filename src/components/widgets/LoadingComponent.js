import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import loading from "../../assets/images/loading-transparent.gif";

export default function LoadingComponent({ isLoading }) {
  return (
    <Transition.Root show={isLoading} as={Fragment}>
      <div className="relative z-50">
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
            <div className="pointer-events-none fixed inset-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="pointer-events-auto relative w-screen flex justify-center items-center mix-blend-color-burn">
                  <div>
                    <img src={loading} className="w-20 h-20" alt="loading" />
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}
