import React from "react";
import CollectionSection from "../../components/sections/CollectionSection";
import CategorySection from "../../components/sections/CategorySection";
import ProductSection from "../../components/sections/ProductSection";
import PromoSection from "../../components/sections/PromoSection";
import StatsSection from "../../components/sections/StatsSection";
import HeroSection from "../../components/sections/HeroSection";
import LoadingComponent from "../../components/widgets/LoadingComponent";

import PromoSectionAlternate from "../../components/sections/PromoSectionAlternate";
import { details } from "../../data/promos_banner";
import { useGetShopQuery } from "../../redux/services/shop";

export default function HomepageView() {
  const { data, isLoading } = useGetShopQuery();

  if (isLoading) {
    return <LoadingComponent />;
  }

  const { banner, category, collection, product, statistics } = data;

  return (
    <>
      <HeroSection banner={banner} />

      <CategorySection categories={category} />
      {category.map((categoryData, index) => {
        if (index > 3) {
          return "";
        }

        return (
          <>
            <PromoSectionAlternate
              heading={categoryData.title}
              text={categoryData.description}
              imgSrc={categoryData.imageUrl}
            />
            <ProductSection products={product} filter={categoryData.title} />
          </>
        );
      })}

      <PromoSection
        heading={details[7].heading}
        text={details[7].text}
        vidSrc={details[7].vidSrc}
        promoimg={details[7].promoimg}
      />
      <CollectionSection collections={collection} />

      {category.map((categoryData, index) => {
        if (index > 3) {
          return (
            <>
              <PromoSectionAlternate
                heading={categoryData.title}
                text={categoryData.description}
                imgSrc={categoryData.imageUrl}
              />
              <ProductSection products={product} filter={categoryData.title} />
            </>
          );
        }

        return "";
      })}

      <StatsSection statistics={statistics} />
    </>
  );
}
