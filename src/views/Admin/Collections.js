import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../themeContext";
import { Link, useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  collectionList,
  getCollectionAsync,
} from "../../redux/collectionSlice";
import CategoryCardComponent from "../../components/widgets/CategoryCardComponent";

export default function Collections({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const dispatch = useDispatch();
  const collections = useSelector(collectionList);

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getCollectionAsync("admin/api/get-collections"));
  }, [dispatch, pageTitle, setTitle]);

  console.log("this is my collections", collections);

  return (
    <div>
      <div className="my-5">
        <Link
          to="/fashion-shop-fe/admin/home/collections/add-collection"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Category
        </Link>
      </div>
      <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6">
        {collections
          ? collections.map((category) => (
              <CategoryCardComponent key={category._id} category={category} />
            ))
          : ""}
      </div>
    </div>
  );
}
