import React, { useContext, useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import swal from "sweetalert";
import {
  useGetBannersQuery,
  useUpdateSelectedMutation,
} from "../../redux/services/banner";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import { EditBannerComponent } from "../../components/widgets/EditBannerComponent";

export default function Hero({ pageTitle, isAdmin }) {
  const [setTitle] = useOutletContext();
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [selectedHero, setSelectedHero] = useState("");
  const { data: banners, isFetching } = useGetBannersQuery();
  const [updateSelected, { isLoading, data }] = useUpdateSelectedMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isFetching || isLoading) {
    return <LoadingComponent />;
  }

  console.log("Banner data", banners);
  const updateSelectedBanner = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
      const willUpdate = await swal({
        title: "Are you sure?",
        text: "Do you want to update?",
        icon: "info",
        buttons: true,
        dangerMode: false,
      });

      if (willUpdate) {
        try {
          await updateSelected({ selectedHero });
          console.log("DAta,", data);
          swal("Updated Successfully", {
            icon: "success",
          });
        } catch (error) {}
      } else {
        swal("Unable to save", {
          icon: "info",
        });
      }
    } catch (error) {}
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
        {banners && banners.msg === "success"
          ? banners.response.map((banner) => (
              <div key={banner._id}>
                <div
                  className={
                    banner.isSelected && isAdmin
                      ? "my-5 rounded-xl overflow-hidden outline outline-offset-2 outline-4 outline-orange-800 w-full"
                      : "my-5 rounded-xl overflow-hidden"
                  }
                >
                  <label htmlFor={banner._id}>
                    <EditBannerComponent
                      banner={banner}
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
