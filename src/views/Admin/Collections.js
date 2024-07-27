import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeContext";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import CategoryCardComponent from "../../components/widgets/CategoryCardComponent";
import {
  useDeleteCollectionMutation,
  useGetCollectionsQuery,
} from "../../redux/services/collection";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import Pagination from "../../components/widgets/Pagination";

export default function Collections({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const [deleteCollection, { isFetching }] = useDeleteCollectionMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page")) || 1;
  const limit = 8;
  const [page, setPage] = useState(currentPage);

  const { isLoading, data: collections } = useGetCollectionsQuery({
    page,
    limit,
  });

  useEffect(() => {
    navigate(`/admin/home/collections?page=${page}`, { replace: true });
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
          to="/admin/home/collections/add-collection"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Collection
        </Link>
      </div>
      {collections != null && collections.msg === "success" ? (
        <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6">
          {collections.response.map((collection) => (
            <CategoryCardComponent
              key={collection._id}
              item={collection}
              isAdmin={true}
               dataType="collection"
              deleteFunc={deleteCollection}
              isCategory={false}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      <Pagination
        currentPage={collections.currentPage}
        totalPages={collections.totalPages}
        totalDocument={collections.totalDocument}
        resultsPerPage={collections.resultsPerPage}
        setPageNum={setPage}
      />
    </div>
  );
}
