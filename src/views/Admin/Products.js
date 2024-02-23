import React, { useContext, useEffect, useState } from "react";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import ProductCardComponent from "../../components/widgets/ProductCardComponent";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/services/product";
import LoadingComponent from "../../components/widgets/LoadingComponent";
import Pagination from "../../components/widgets/Pagination";

export default function Products({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [skipState, setSkipState] = useState(false);
  const { data: products, isLoading } = useGetProductsQuery(searchParams, {
    refetchOnMountOrArgChange: true,
    skip: skipState,
  });
  const [deleteProduct] = useDeleteProductMutation();
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);

  useEffect(() => {
    const urlSearchParams = new URLSearchParams(searchParams);
    const pageNumberStringify = JSON.stringify(pageNum);
    urlSearchParams.set("page", pageNumberStringify);
    setSearchParams(urlSearchParams);
    setSkipState(false);
  }, [pageNum, searchParams, setSearchParams]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <div className="my-5">
        <Link
          to="/admin/home/products/add-product"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Product
        </Link>
      </div>
      <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6">
        {products.response.length > 0
          ? products.response.map((product) => (
              <ProductCardComponent
                key={product._id}
                product={product}
                deleteFunc={deleteProduct}
                isAdmin="true"
              />
            ))
          : ""}
      </div>
      {/* <Pagination
        pageNum={pageNum}
        setSkipState={setSkipState}
        setPageNum={setPageNum}
        pageDetails={products.pageDetails}
      /> */}
    </div>
  );
}
