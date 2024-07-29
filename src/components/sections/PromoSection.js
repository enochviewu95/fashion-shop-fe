import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";

export default function PromoSection({
  heading,
  text,
  vidSrc,
  promoimg,
  background = true,
}) {
  const { lightBackground } = useContext(ThemeContext);

  return (
    <section
      className={
        background
          ? `relative overflow-hidden ${lightBackground}`
          : "relative overflow-hidden "
      }
    >
      <div className="relative h-screen">
        <video
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto  hidden lg:block"
          preload="auto"
          width={1280}
          height={720}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={vidSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div
          id="animated"
          className="w-full h-full absolute lg:bg-black/60"
        >
          <div>
            <div className="pt-16 h-full pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto h-full max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <div
                    // data-aos="fade-right"
                    // data-aos-delay="100"
                    // data-aos-duration="300"
                    // data-aos-easing="ease-in"
                  >
                    <h1 className="font text-4xl font-bold tracking-tight text-gray-700 lg:text-gray-200 lg:text-6xl">
                      {heading}
                    </h1>
                  </div>
                  <div
                    // data-aos="fade-right"
                    // data-aos-delay="200"
                    // data-aos-duration="300"
                    // data-aos-easing="ease-out-cubic"
                  >
                    <p className="mt-4 lg:text-2xl text-lg leading-8 text-gray-700 lg:text-gray-200">
                      {text}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="my-10">
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div
                          // data-aos="fade-left"
                          // data-aos-delay="700"
                          // data-aos-duration="300"
                          // data-aos-easing="ease-out-cubic"
                        >
                          <div className="overflow-hidden rounded-lg">
                            <img
                              src={promoimg}
                              alt="promo"
                              className="object-cover object-center h-[45rem]"
                              loading="lazy"
                              width={640}
                              height={720}
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
        </div>
      </div>
    </section>
  );
}
