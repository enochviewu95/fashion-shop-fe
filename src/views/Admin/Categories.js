import React, { useContext, useEffect, useState } from "react";
import CategoryCardComponent from "../../components/widgets/CategoryCardComponent";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useNavigate, useLocation } from "react-router-dom";
import Pagination from "../../components/widgets/Pagination";

import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../../redux/services/category";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function Categories({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const [deleteCategory, { isLoading: isFetching }] =
    useDeleteCategoryMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page")) || 1;
  const limit = 8;
  const [page, setPage] = useState(currentPage);

  const { isLoading, data: categories } = useGetCategoriesQuery({
    page,
    limit,
  });

  useEffect(() => {
    navigate(`/admin/home/categories?page=${page}`, { replace: true });
  }, [page, navigate]);

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  if (isLoading || isFetching) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <div className="my-5">
        <Link
          to="/admin/home/categories/add-category"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Category
        </Link>
      </div>
      {categories != null && categories.msg === "success" ? (
        <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6 h-[60rem]">
          {categories.response.map((category) => (
            <CategoryCardComponent
              key={category._id}
              item={category}
              isAdmin={true}
              isCategory={true}
              deleteFunc={deleteCategory}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      <Pagination
        currentPage={categories.currentPage}
        totalPages={categories.totalPages}
        totalDocument={categories.totalDocument}
        setPageNum={setPage}
      />
    </div>
  );
}
