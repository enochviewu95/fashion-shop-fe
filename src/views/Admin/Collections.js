import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/themeContext";
import { Link, useOutletContext } from "react-router-dom";
import CategoryCardComponent from "../../components/widgets/CategoryCardComponent";
import { useDeleteCollectionMutation, useGetCollectionsQuery } from "../../redux/services/collection";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function Collections({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const { isLoading, data: collections } = useGetCollectionsQuery();
  const [deleteCollection, {isFetching}] = useDeleteCollectionMutation();

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
          to="/admin/home/collections/add-collection"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Collection
        </Link>
      </div>
      <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6">
        {collections.response.length > 0
          ? collections.response.map((collection) => (
              <CategoryCardComponent
                key={collection._id}
                item={collection}
                isAdmin={true}
                deleteFunc= {deleteCollection}
                isCategory={false}
              />
            ))
          : ""}
      </div>
    </div>
  );
}
