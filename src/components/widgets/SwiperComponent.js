import React from "react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function SwiperComponent({ children, screenType }) {
  return (
    <Swiper
      slidesPerView={screenType === "small" ? 2 : 4}
      spaceBetween={40}
      pagination={{
        type: "progressbar",
        progressbarFillClass: "swiper-progress-fill",
      }}
      modules={[Pagination]}
    >
      {children}
    </Swiper>
  );
}
