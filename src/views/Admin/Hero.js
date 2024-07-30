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
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../../components/widgets/Pagination";
import { dialogAlert } from "../../utils/DialogAlert";

export default function Hero({ pageTitle, isAdmin }) {
  const [setTitle] = useOutletContext();
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page")) || 1;
  const limit = 1;
  const [page, setPage] = useState(currentPage);
  const [selectedHero, setSelectedHero] = useState("");
  const { data: banners, isFetching } = useGetBannersQuery({ page, limit });
  const [updateSelected, { isLoading }] =
    useUpdateSelectedMutation();

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  useEffect(() => {
    navigate(`/admin/home/hero?page=${page}`, { replace: true });
  }, [page, navigate]);

  if (isFetching || isLoading) {
    return <LoadingComponent />;
  }

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
        const response = await updateSelected({ selectedHero });
        if (response !== null && response.data && response.data.msg === "success") {
          swal("Updated Successfully", {
            icon: "success",
          });
        } else {
          dialogAlert({
            title: "Unable to save",
            msg: "Unable to update selected banner. Please try again later",
          });
        }
      } else {
        swal("Unable to save", {
          icon: "info",
        });
      }
    } catch (error) {
      dialogAlert({
        title: error.name.toUpperCase(),
        msg: error.message,
      });
    }
  };

  // const handlePageChange = (newPage) => {
  //   query.set("page", newPage);
  //   navigate({ search: query.toString() });
  // };

  return (
    <>
      <div>
        <div className="flex">
          <Link
            to="/admin/home/hero/add-hero"
            className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white rounded-lg shadow-sm`}
          >
            Add Banner
          </Link>
          <button
            onClick={updateSelectedBanner}
            className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white mx-5 rounded-lg shadow-sm`}
          >
            Apply Changes
          </button>
        </div>
        {banners && banners.msg === "success"
          ? banners.response.map((banner) => (
              <div key={banner._id} className="h-[40rem]">
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
        <Pagination
          currentPage={banners.currentPage}
          totalPages={banners.totalPages}
          totalDocument={banners.totalDocument}
          resultsPerPage={banners.resultsPerPage}
          setPageNum={setPage}
        />
      </div>
    </>
  );
}
