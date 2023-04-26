import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { bannerList, getBannersAsync } from "../../redux/bannerSlice";
import HeroSection from "../../components/sections/HeroSection";
import { ThemeContext } from "../../themeContext";

export default function Hero({ pageTitle }) {
  const [setTitle] = useOutletContext();
  const dispatch = useDispatch();
  const banners = useSelector(bannerList);
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getBannersAsync("admin/api/get-banners"));
  }, [dispatch, pageTitle, setTitle]);

  console.log("Banners", banners);

  return (
    <div>
      <div className="my-5">
        <Link
          to="/fashion-shop-fe/admin/home/add-hero"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Banner
        </Link>
      </div>
      {banners
        ? banners.map((banner) => (
            <div className="my-5 rounded-xl overflow-hidden">
              <HeroSection key={banner._id} banner={banner} />
            </div>
          ))
        : ""}
    </div>
  );
}
