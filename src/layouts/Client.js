import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/widgets/NavigationBar";
import NewLetterSection from "../components/sections/NewsLetterSection";
import { useDispatch } from "react-redux";
import { getSelectedBannerAsync } from "../redux/bannerSlice";
import { getCategoriesAsync } from "../redux/categorySlice";
import { getCollectionAsync } from "../redux/collectionSlice";
import { getProductAsync } from "../redux/productSlice";

export default function Client() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedBannerAsync("shop/api/get-banner"));
    dispatch(getCategoriesAsync("shop/api/get-categories"));
    dispatch(getCollectionAsync("shop/api/get-collections"));
    dispatch(getProductAsync("shop/api/get-products"))
  });
  return (
    <>
      <NavigationBar />
      <Outlet />
      <NewLetterSection />
    </>
  );
}
