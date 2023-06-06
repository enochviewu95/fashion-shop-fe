import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import DeleteItemsComponent from "../widgets/DeleteItemsComponent";
import { useSelector } from "react-redux";
import { shopData } from "../../redux/shopSlice";

export default function HeroSection({ isAdmin, selectedHero, hero }) {
  const bannerData = useSelector(shopData);
  let banner;
  if (isAdmin && hero) {
    banner = hero;
  } else {
    if (bannerData === null) return;
    banner = bannerData.banner;
  }
  const bannerUrl =
    process.env.REACT_APP_BASE_URL + banner.imageUrl.replace(/\\/g, "/");

  return (
    <section className="w-full h-[40rem] relative">
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover object-center filter brightness-50"
          src={bannerUrl}
          alt={banner.title}
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
                to={`/fashion-shop-fe/admin/home/hero/edit-hero/${banner._id}`}
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
  );
}
