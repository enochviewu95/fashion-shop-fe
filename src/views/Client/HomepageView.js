import React from "react";
import FeatureSection from "../../components/sections/FeatureSection";
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
      {banner ? <HeroSection key={banner.result._id} banner={banner.result} /> : ""}
      <CategorySection />
      <ProductSection />
      <PromoSection />
      <FeatureSection />
      <StatsSection />
    </div>
  );
}
