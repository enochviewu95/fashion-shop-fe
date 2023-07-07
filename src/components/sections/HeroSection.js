import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import DeleteItemsComponent from "../widgets/DeleteItemsComponent";
import { useSelector } from "react-redux";
import { shopData } from "../../redux/shopSlice";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function HeroSection({ isAdmin, selectedHero, hero }) {
  const bannerData = useSelector(shopData);
  let banner;
  if (isAdmin && hero) {
    banner = hero;
  } else {
    if (bannerData === null) return;
    banner = bannerData.banner;
  }

  if (banner == null) return "";

  const bannerUrl =
    process.env.REACT_APP_BASE_URL + banner.imageUrl.replace(/\\/g, "/");

  return isAdmin && hero ? (
    <section className="w-full h-[40rem] relative">
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover object-center filter brightness-50"
          src={bannerUrl}
          alt={banner.title}
          loading="lazy"
        />
      </div>
      <div className="w-full relative h-full flex flex-col justify-center">
        <div className="text-center rounded h-full backdrop-blur-sm bg-black/20 flex flex-col justify-center content-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            {banner.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            {banner.description}
          </p>

          {isAdmin ? (
            <div>
              <div className="text-end w-16 absolute bottom-6 right-6">
                <CheckCircleIcon
                  className={
                    selectedHero === banner._id
                      ? "text-orange-300"
                      : selectedHero === "" && banner.isSelected
                      ? "text-orange-300"
                      : "text-white"
                  }
                />
              </div>
              <Link
                to={`/admin/home/hero/edit-hero/${banner._id}`}
                className="absolute top-8 left-3 w-7"
              >
                <PencilSquareIcon className="text-orange-300 hover:text-orange-500" />
              </Link>
              <DeleteItemsComponent
                isAdmin={isAdmin}
                itemId={banner._id}
                deleteUrl="admin/api/delete-banner"
                disableDelete={banner.isSelected ? true : false}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  ) : (
    /***********************Animated Ui**********************/
    <Transition show={true} appear={true}>
      <section className="w-full relative">
        <Transition.Child
          as={Fragment}
          enter="transition ease-[cubic-bezier(.01,.73,.45,.99)] duration-300 delay-200 transform opacity"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
        >
          <div className="absolute w-full aspect-w-7 aspect-h-10 lg:aspect-h-3">
            <img
              className="w-full h-full object-cover object-center filter brightness-50"
              src={bannerUrl}
              alt={banner.title}
              fetchpriority="high"
            />
          </div>
        </Transition.Child>
        <div className="w-full relative aspect-w-7 aspect-h-10 lg:aspect-h-3 flex-col justify-center">
          <div className="text-center rounded h-full items-center backdrop-blur-sm bg-black/20 flex flex-col justify-center content-center">
            <div className="max-w-lg">
              <Transition.Child
                as={Fragment}
                enter="transition ease-[cubic-bezier(.01,.73,.35,1.35)] duration-500 delay-500 transform"
                enterFrom="scale-0"
                enterTo="scale-100"
              >
                <h1 className="text-2xl font-bold tracking-tight text-gray-200 sm:text-6xl">
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

            {isAdmin ? (
              <div>
                <div className="text-end w-16 absolute bottom-6 right-6">
                  <CheckCircleIcon
                    className={
                      selectedHero === banner._id
                        ? "text-orange-300"
                        : selectedHero === "" && banner.isSelected
                        ? "text-orange-300"
                        : "text-white"
                    }
                  />
                </div>
                <Link
                  to={`/admin/home/hero/edit-hero/${banner._id}`}
                  className="absolute top-8 left-3 w-7"
                >
                  <PencilSquareIcon className="text-orange-300 hover:text-orange-500" />
                </Link>
                <DeleteItemsComponent
                  isAdmin={isAdmin}
                  itemId={banner._id}
                  deleteUrl="admin/api/delete-banner"
                  disableDelete={banner.isSelected ? true : false}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </Transition>
  );
}
