import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function HeroSection({ banner, isAdmin, selectedHero }) {
  console.log("Banner image", banner.imageUrl);
  const bannerUrl =
    process.env.REACT_APP_BASE_URL + banner.imageUrl.replace(/\\/g, "/");

  return (
    <div className="w-full h-[40rem] relative">
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover object-center filter brightness-50"
          src={bannerUrl}
          alt={banner.title}
        />
      </div>
      <div className="w-full relative h-full flex flex-col justify-center">
        <div className="text-center rounded h-full  backdrop-blur-sm bg-white/20 flex flex-col justify-center content-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-6xl">
            {banner.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            {banner.description}
          </p>

          {isAdmin ? (
            <div className="text-end w-16 absolute bottom-6 right-6">
              <CheckCircleIcon
                className={
                  selectedHero === banner._id ? "text-orange-300" : "text-white "
                }
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
