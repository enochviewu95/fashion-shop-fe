import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import CategoryCardComponent from "../widgets/CategoryCardComponent";
import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import SwiperComponent from "../widgets/SwiperComponent";

export default function CategorySection({categories}) {
  const { lightBackground } = useContext(ThemeContext);

  return categories.length > 0 ? (
    <section className={lightBackground}>
      <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto h-full max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-28">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <div className="mt-6 hidden lg:flex">
            <SwiperComponent screenType="large">
              {categories.map((category) => (
                <SwiperSlide key={category._id}>
                  <CategoryCardComponent item={category} />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
          <div className="mt-6 lg:hidden">
            <SwiperComponent screenType="small">
              {categories.map((category) => (
                <SwiperSlide key={category._id}>
                  <CategoryCardComponent item={category} />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}
