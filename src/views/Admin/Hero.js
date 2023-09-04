import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useOutletContext } from "react-router-dom";
import { bannerList, getBannersAsync } from "../../redux/bannerSlice";
import HeroSection from "../../components/sections/HeroSection";
import { ThemeContext } from "../../context/themeContext";
import swal from "sweetalert";
import { updateData } from "../../services/apis";

export default function Hero({ pageTitle, isAdmin }) {
 
  const [setTitle, setLoading] = useOutletContext();
  const dispatch = useDispatch();
  const banners = useSelector(bannerList);
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [selectedHero, setSelectedHero] = useState("");


  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getBannersAsync("admin/api/get-banners"));
    if (bannerList.length > 0) {
      setLoading(false);
    }
  }, [dispatch, pageTitle, setLoading, setTitle]);

  const updateSelectedBanner = (event) => {
    event.preventDefault();
    event.stopPropagation();
    swal({
      title: "Are you sure?",
      text: "Do you want to update?",
      icon: "info",
      buttons: true,
      dangerMode: false,
    }).then((willUpdate) => {
      if (willUpdate) {
        updateData(`/admin/api/update-selected/${selectedHero}`).then(() => {
          swal("Updated Successfully", {
            icon: "success",
          }).then(() => {
            console.log("Saving data");
            window.location.reload();
          });
        });
      } else {
        swal("Unable to save", {
          icon: "info",
        });
      }
    });
  };

  return (
    <>
      <div>
        <div className="my-5 flex">
          <Link
            to="/admin/home/hero/add-hero"
            className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
          >
            Add Banner
          </Link>
          <button
            onClick={updateSelectedBanner}
            className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white mx-5 my-5 rounded-lg shadow-sm`}
          >
            Apply Changes
          </button>
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
                      hero={banner}
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
    </>
  );
}
