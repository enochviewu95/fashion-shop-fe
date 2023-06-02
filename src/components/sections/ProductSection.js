import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import ProductCardComponent from "../widgets/ProductCardComponent";
import SwiperComponent from "../widgets/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { shopData } from "../../redux/shopSlice";


export default function ProductSection() {
  const { deepBackground } = useContext(ThemeContext);

  const productsData = useSelector(shopData)
  const products = productsData.product

  return products.length > 0? (
    <section className={deepBackground}>
      <div className="mx-auto h-full max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to deploy your app
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p>
        </div>
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
  ):""
}
