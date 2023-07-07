import { Fragment, useContext, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import ProductCardComponent from "../widgets/ProductCardComponent";
import SwiperComponent from "../widgets/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { shopData } from "../../redux/shopSlice";
import { Transition } from "@headlessui/react";
import useOnScreen from "../../hooks/useOnScreen";

export default function ProductSection() {
  const { deepBackground } = useContext(ThemeContext);

  const productsData = useSelector(shopData);
  const products = productsData.product;

  
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  
  if(products.length < 1) return "";

  return products.length > 0 ? (
    <section className={deepBackground}>
      <div ref={ref} className="mx-auto h-full max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <Transition appear={true} show={isVisible}>
          <div className="mx-auto max-w-2xl lg:text-center">
            <Transition.Child
             as={Fragment}
             enter="transition ease-[cubic-bezier(.01,.73,.35,1.35)] duration-500 delay-500 transform"
             enterFrom="-translate-y-full opacity-0"
             enterTo="translate-y-0 opacity-1">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Unleash Your Style with Exquisite Ghanaian Clothing.
              </p>
            </Transition.Child>
            <Transition.Child
             as={Fragment}
             enter="transition ease-[cubic-bezier(.01,.73,.35,1.35)] duration-500 delay-700 transform"
             enterFrom="-translate-y-full opacity-0"
             enterTo="translate-y-0 opacity-1">
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Experience the vibrant heritage and rich craftsmanship of
                Ghanaian clothing, where traditional artistry meets contemporary
                fashion, creating unique and timeless pieces for the modern
                trendsetters.
              </p>
            </Transition.Child>
          </div>
        </Transition>
        <div className="mt-16 hidden lg:flex">
          <SwiperComponent screenType="large">
            {products.map((product) => (
              <SwiperSlide key={product._id}>
                <ProductCardComponent product={product} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
        <div className="mt-16 lg:hidden">
          <SwiperComponent screenType="small">
            {products.map((product) => (
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
