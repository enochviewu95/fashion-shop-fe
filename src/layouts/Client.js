import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/widgets/NavigationBar";
import NewLetterSection from "../components/sections/NewsLetterSection";
import { useDispatch, useSelector } from "react-redux";
import LoadingComponent from "../components/widgets/LoadingComponent";
import { getShopAsync, shopData } from "../redux/shopSlice";
import Navbar from "../components/widgets/Navbar";

export default function Client() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const shop = useSelector(shopData);
  useEffect(() => {
    dispatch(getShopAsync("shop/api/get-shop"));
    if (shopData) {
      setLoading(false);
    }
  }, [dispatch]);

  return shop ? (
    <>
      {/* <NavigationBar setLoading={setLoading} /> */}
      <Navbar setLoading={setLoading}/>
      <Outlet setLoading={setLoading} />
      <NewLetterSection setLoading={setLoading} />
      {loading && <LoadingComponent isLoading={loading} />}
    </>
  ) : (
    <LoadingComponent isLoading={loading} />
  );
}
