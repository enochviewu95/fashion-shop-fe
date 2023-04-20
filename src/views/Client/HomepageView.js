import React from "react";
import FeatureSection from "../../components/sections/FeatureSection";
import CategorySection from "../../components/sections/CategorySection";
import ProductSection from "../../components/sections/ProductSection";
import PromoSection from "../../components/sections/PromoSection";
import StatsSection from "../../components/sections/StatsSection";
import HeroSection from "../../components/sections/HeroSection";
import { useSelector } from "react-redux";
import { bannerData } from "../../redux/bannerSlice";

export default function HomepageView() {
  const banners = useSelector(bannerData);
  console.log("Banners", banners);

  return (
    <div>
      {banners.map((banner) =>
        banner.isSelected ? <HeroSection key={banner._id} banner={banner} /> : ""
      )}
      <CategorySection />
      <ProductSection />
      <PromoSection />
      <FeatureSection />
      <StatsSection />
    </div>
  );
}
