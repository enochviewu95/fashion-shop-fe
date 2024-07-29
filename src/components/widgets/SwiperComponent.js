import React from "react";
import { Swiper } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

export default function SwiperComponent({ children, screenType }) {
  return (
    <Swiper
      slidesPerView={screenType === "small" ? 2 : 4}
      spaceBetween={40}
      autoplay
      pagination={{
        type: "progressbar",
        progressbarFillClass: "swiper-progress-fill",
      }}
      modules={[Pagination,Autoplay]}
    >
      {children}
    </Swiper>
  );
}
