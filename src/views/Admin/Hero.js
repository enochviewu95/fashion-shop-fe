import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { bannerList, getBannersAsync } from "../../redux/bannerSlice";
import HeroSection from "../../components/sections/HeroSection";
import { ThemeContext } from "../../themeContext";

export default function Hero({ pageTitle, isAdmin }) {
  const [setTitle] = useOutletContext();
  const dispatch = useDispatch();
  const banners = useSelector(bannerList);
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [selectedHero, setSelectedHero] = useState("");

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getBannersAsync("admin/api/get-banners"));
  }, [dispatch, pageTitle, setTitle]);

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
            <div key={banner._id}>
              <div
                className={
                  banner.isSelected && isAdmin
                    ? "my-5 rounded-xl overflow-hidden outline outline-offset-2 outline-4 outline-orange-800 w-full"
                    : "my-5 rounded-xl overflow-hidden"
                }
              >
                <label htmlFor={banner._id}>
                  <HeroSection
                    banner={banner}
                    isAdmin="true"
                    selectedHero={selectedHero}
                  />
                </label>
              </div>
              <input
                id={banner._id}
                name="selectedHero"
                className="absolute overflow-hidden h-0 w-0"
                type="radio"
                onClick={(event) => {
                  setSelectedHero(event.target.value);
                }}
                value={banner._id}
              />
            </div>
          ))
        : ""}
    </div>
  );
}
