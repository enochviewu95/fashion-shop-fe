import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import ProductCardComponent from "../widgets/ProductCardComponent";
import SwiperComponent from "../widgets/SwiperComponent";
import { SwiperSlide } from "swiper/react";

export default function ProductSection({ products, filter }) {
  const { deepBackground } = useContext(ThemeContext);
  const ref = useRef(null);
  let productItems = [];

  if (filter) {
    productItems = products.filter((product) => {
      console.log("Proudct section", product.category);
      return (
        product.category != null &&
        product.category.title.toLowerCase() === filter.toLowerCase()
      );
    });
  } else {
    productItems = products;
  }

  return productItems.length > 0 ? (
    <section className={deepBackground}>
      <div
        ref={ref}
        className="mx-auto h-full max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <div className="mt-16 hidden lg:flex">
          <SwiperComponent screenType="large">
            {productItems.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCardComponent product={product} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
        <div className="mt-16 lg:hidden">
          <SwiperComponent screenType="small">
            {productItems.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCardComponent product={product} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
  ) : (
    ""
  );
}
