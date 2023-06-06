import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/themeContext";
import {
  Link,
  Navigate,
  useLocation,
  useOutletContext,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  collectionList,
  getCollectionAsync,
} from "../../redux/collectionSlice";
import CategoryCardComponent from "../../components/widgets/CategoryCardComponent";

export default function Collections({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle, setLoading] = useOutletContext();
  const dispatch = useDispatch();
  const collections = useSelector(collectionList);
  const location = useLocation();

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getCollectionAsync("admin/api/get-collections"));
    if (collectionList.length > 0) {
      setLoading(false);
    }
  }, [dispatch, pageTitle, setLoading, setTitle]);

  return collections.length !== 0 ? (
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
          ? collections.map((collection) => (
              <CategoryCardComponent
                key={collection._id}
                item={collection}
                isAdmin={true}
                isCategory={false}
              />
            ))
          : ""}
      </div>
    </div>
  ) : (
    <Navigate
      to="/fashion-shop-fe/pagenotfound"
      state={{ from: location }}
      replace
    />
  );
}
