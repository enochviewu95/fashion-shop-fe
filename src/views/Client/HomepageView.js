import React from "react";
import CollectionSection from "../../components/sections/CollectionSection";
import CategorySection from "../../components/sections/CategorySection";
import ProductSection from "../../components/sections/ProductSection";
import PromoSection from "../../components/sections/PromoSection";
import StatsSection from "../../components/sections/StatsSection";
import HeroSection from "../../components/sections/HeroSection";
import { useSelector } from "react-redux";
import { selectedBanner } from "../../redux/bannerSlice";

export default function HomepageView() {
  const banner = useSelector(selectedBanner);
  console.log("Banners", banner);

  return (
    <div>
      {banner ? <HeroSection key={banner._id} banner={banner} /> : ""}
      <CategorySection />
      <ProductSection />
      <PromoSection />
      <CollectionSection />
      <StatsSection />
    </div>
  );
}
