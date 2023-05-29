import React, { useContext, useEffect } from "react";
import CategoryCardComponent from "../../components/widgets/CategoryCardComponent";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useDispatch, useSelector } from "react-redux";
import { categoryList, getCategoriesAsync } from "../../redux/categorySlice";

export default function Categories({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const dispatch = useDispatch();
  const categories = useSelector(categoryList);

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getCategoriesAsync("admin/api/get-categories"));
  }, [dispatch, pageTitle, setTitle]);

  console.log("Categories", categories);

  return (
    <div>
      <div className="my-5">
        <Link
          to="/fashion-shop-fe/admin/home/categories/add-category"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Category
        </Link>
      </div>
      <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6">
        {categories.map((category) => (
          <CategoryCardComponent key={category._id} item={category} isAdmin={true} isCategory={true}/>
        ))}
      </div>
    </div>
  );
}
