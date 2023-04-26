import { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import CategoryCardComponent from "../widgets/CategoryCardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { useSelector } from "react-redux";
import { categoryList } from "../../redux/categorySlice";

export default function CategorySection() {
  const { lightBackground } = useContext(ThemeContext);
  const categories = useSelector(categoryList);

  return (
    <div className={lightBackground}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-28">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <div className="mt-6 hidden lg:flex">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                type: "progressbar",
                progressbarFillClass: "swiper-progress-fill",
              }}
              modules={[Pagination]}
            >
              {categories.map((category) => (
                <SwiperSlide>
                  <CategoryCardComponent
                    key={category._id}
                    category={category}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="mt-6 lg:hidden">
            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              pagination={{
                type: "progressbar",
                progressbarFillClass: "swiper-progress-fill",
              }}
              modules={[Pagination]}
            >
              {categories.map((category) => (
                <SwiperSlide>
                  <CategoryCardComponent
                    key={category._id}
                    category={category}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
