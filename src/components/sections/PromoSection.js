import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import Sewing from "../../assets/video/sewing_vid_two.mp4";
import promo from "../../assets/images/promo.webp";

export default function PromoSection({ background = true }) {
  const { lightBackground } = useContext(ThemeContext);

  const ref = useRef(null);

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
            width={1280}
            height={720}
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
          <div>
            <div className="pt-16 h-full pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
              <div className="relative mx-auto h-full max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                <div className="sm:max-w-lg">
                  <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="300" data-aos-easing="ease-out-cubic">
                    <h1 className="font text-4xl font-bold tracking-tight text-gray-700 lg:text-gray-200 lg:text-6xl">
                      Crafted Ghanaian Elegance
                    </h1>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="300" data-aos-easing="ease-out-cubic">
                    <p className="mt-4 lg:text-2xl text-lg leading-8 text-gray-700 lg:text-gray-200">
                      Discover Ghanaian clothing, meticulously handcrafted with
                      passion and precision, showcasing the artistry and
                      heritage that make each piece truly exceptional.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="my-10">
                      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                        <div className="flex items-center space-x-6 lg:space-x-8">
                          <div  data-aos="fade-left" data-aos-delay="700" data-aos-duration="300" data-aos-easing="ease-out-cubic">
                            <div className="overflow-hidden rounded-lg">
                              <img
                                src={promo}
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
