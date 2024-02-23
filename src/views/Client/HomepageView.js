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
      <PromoSectionAlternate
        heading={details[0].heading}
        text={details[0].text}
        imgSrc={details[0].imgSrc}
        promoimg={details[0].promoimg}
      />
      <ProductSection products={product} filter="jackets" />
      
      <PromoSectionAlternate
        heading={details[1].heading}
        text={details[1].text}
        imgSrc={details[1].imgSrc}
        promoimg={details[1].promoimg}
      />
      <ProductSection products={product} filter="casual"/>

      <PromoSectionAlternate
        heading={details[2].heading}
        text={details[2].text}
        imgSrc={details[2].imgSrc}
        promoimg={details[2].promoimg}
      />
      <ProductSection products={product} filter="gowns"/>

      <PromoSectionAlternate
        heading={details[3].heading}
        text={details[3].text}
        imgSrc={details[3].imgSrc}
        promoimg={details[3].promoimg}
      />
      <ProductSection products={product} filter="shirt"/>

      <PromoSection
        heading={details[7].heading}
        text={details[7].text}
        vidSrc={details[7].vidSrc}
        promoimg={details[7].promoimg}
      />
      <CollectionSection collections={collection} />
      

      <PromoSectionAlternate
        heading={details[4].heading}
        text={details[4].text}
        imgSrc={details[4].imgSrc}
        promoimg={details[4].promoimg}
      />
      <ProductSection products={product} filter="dresses"/>

      <PromoSectionAlternate
        heading={details[5].heading}
        text={details[5].text}
        imgSrc={details[5].imgSrc}
        promoimg={details[5].promoimg}
      />
      <ProductSection products={product} filter="engagement gowns"/>

      <PromoSectionAlternate
        heading={details[6].heading}
        text={details[6].text}
        imgSrc={details[6].imgSrc}
        promoimg={details[6].promoimg}
      />
      <ProductSection products={product} filter="wedding gowns" />

      <StatsSection statistics={statistics} />
    </>
  );
}
