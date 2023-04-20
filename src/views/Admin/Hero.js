import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { bannerData, getBannersAsync } from "../../redux/bannerSlice";
import HeroSection from "../../components/sections/HeroSection";

export default function Hero({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const dispatch = useDispatch();
  const banners = useSelector(bannerData);

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getBannersAsync("admin/api/get-banners"));
  }, [dispatch, pageTitle, setTitle]);

  console.log("Banners", banners);

  return (
    <>
      {banners.map((banner) => (
        <HeroSection key={banner._id} banner={banner} />
      ))}
    </>
  );
}
