import React from "react";
import CollectionSection from "../../components/sections/CollectionSection";
import CategorySection from "../../components/sections/CategorySection";
import ProductSection from "../../components/sections/ProductSection";
import PromoSection from "../../components/sections/PromoSection";
import StatsSection from "../../components/sections/StatsSection";
import HeroSection from "../../components/sections/HeroSection";


import PromoSectionAlternate from "../../components/sections/PromoSectionAlternate";
import { details } from "../../data/promos_banner";


export default function HomepageView() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <PromoSectionAlternate
        heading={details[0].heading}
        text={details[0].text}
        imgSrc={details[0].imgSrc}
        promoimg={details[0].promoimg}
      />
      <ProductSection />
      <PromoSectionAlternate
        heading={details[1].heading}
        text={details[1].text}
        imgSrc={details[1].imgSrc}
        promoimg={details[1].promoimg}
      />
      <ProductSection />
      <PromoSectionAlternate
        heading={details[2].heading}
        text={details[2].text}
        imgSrc={details[2].imgSrc}
        promoimg={details[2].promoimg}
      />
      <ProductSection />
      <PromoSectionAlternate
        heading={details[3].heading}
        text={details[3].text}
        imgSrc={details[3].imgSrc}
        promoimg={details[3].promoimg}
      />
      <ProductSection />
      <PromoSectionAlternate
        heading={details[4].heading}
        text={details[4].text}
        imgSrc={details[4].imgSrc}
        promoimg={details[4].promoimg}
      />
      <ProductSection />
      <PromoSectionAlternate
        heading={details[5].heading}
        text={details[5].text}
        imgSrc={details[5].imgSrc}
        promoimg={details[5].promoimg}
      />
      <ProductSection />
      <PromoSectionAlternate
        heading={details[6].heading}
        text={details[6].text}
        imgSrc={details[6].imgSrc}
        promoimg={details[6].promoimg}
      />
      <ProductSection />
      <PromoSection
        heading={details[7].heading}
        text={details[7].text}
        vidSrc={details[7].vidSrc}
        promoimg={details[7].promoimg}
      />
      <CollectionSection />
      <StatsSection />
    </>
  );
}
