import React, { useContext, useEffect } from "react";
import CategoryCardComponent from "../../components/widgets/CategoryCardComponent";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../../redux/services/category";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function Categories({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const { isLoading, data: categories } = useGetCategoriesQuery();
  const [deleteCategory, { isFetching }] = useDeleteCategoryMutation();

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
      {
     categories != null && categories.msg === "success" ?
      <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6">
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
          :""
      }
 
    </div>
  );
}
