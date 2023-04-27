import { useContext, useId } from "react";
import { ThemeContext } from "../../themeContext";
import CategoryCardComponent from "../widgets/CategoryCardComponent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { useSelector } from "react-redux";
import { categoryList } from "../../redux/categorySlice";
import SwiperComponent from "../widgets/SwiperComponent";

export default function CategorySection() {
  const { lightBackground } = useContext(ThemeContext);
  const categories = useSelector(categoryList);
  const id = useId();

  return (
    <div className={lightBackground}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-28">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <div className="mt-6 hidden lg:flex">
            <SwiperComponent screenType="large">
              {categories.map((category) => (
                <SwiperSlide>
                  <CategoryCardComponent
                    key={category._id}
                    category={category}
                  />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
          <div className="mt-6 lg:hidden">
            <SwiperComponent screenType="small">
              {categories.map((category) => (
                <SwiperSlide>
                  <CategoryCardComponent
                    key={category._id}
                    category={category}
                  />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
        </div>
      </div>
    </div>
  );
}
