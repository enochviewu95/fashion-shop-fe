import React from "react";
import CollectionSection from "../../components/sections/CollectionSection";
import CategorySection from "../../components/sections/CategorySection";
import ProductSection from "../../components/sections/ProductSection";
import PromoSection from "../../components/sections/PromoSection";
import StatsSection from "../../components/sections/StatsSection";
import HeroSection from "../../components/sections/HeroSection";

export default function HomepageView() {
 
  return (
    <>
      <HeroSection/>
      <CategorySection />
      <ProductSection />
      <PromoSection />
      <CollectionSection />
      <StatsSection />
    </>
  );
}
