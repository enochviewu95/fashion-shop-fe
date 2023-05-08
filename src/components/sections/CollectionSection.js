import { useContext } from "react";
import { ThemeContext } from "../../themeContext";
import { useSelector } from "react-redux";
import { collectionList } from "../../redux/collectionSlice";
import SwiperComponent from "../widgets/SwiperComponent";
import { SwiperSlide } from "swiper/react";
import CategoryCardComponent from "../widgets/CategoryCardComponent";


export default function CollectionSection() {
  const { deepBackground } = useContext(ThemeContext);
  const collections = useSelector(collectionList);
  console.log('Collection list',collections)

  return (
    <div className={deepBackground}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
          <div className="mt-6 hidden lg:flex">
            <SwiperComponent screenType="large">
              {collections.map((collection) => (
                <SwiperSlide key={"swiper" + collection._id}>
                  <CategoryCardComponent
                    key={collection._id}
                    item={collection}
                  />
                </SwiperSlide>
              ))}
            </SwiperComponent>
          </div>
          <div className="mt-6 lg:hidden">
            <SwiperComponent screenType="small">
              {collections.map((collection) => (
                <SwiperSlide>
                  <CategoryCardComponent
                    key={collection._id}
                    item={collection}
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
