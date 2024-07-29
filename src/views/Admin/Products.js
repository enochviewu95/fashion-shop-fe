import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useOutletContext, useSearchParams } from "react-router-dom";
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

  const [deleteProduct] = useDeleteProductMutation();

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const currentPage = parseInt(query.get("page")) || 1;
  const limit = 8;
  const [page, setPage] = useState(currentPage);
  const { data: products, isLoading } = useGetProductsQuery({
    page,
    limit,
  });

  useEffect(() => {
    navigate(`/admin/home/products?page=${page}`, { replace: true });
  }, [page, navigate]);


  useEffect(() => {
    setTitle(pageTitle);
  }, [pageTitle, setTitle]);


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
      <Pagination
        currentPage={products.currentPage}
        totalPages={products.totalPages}
        totalDocument={products.totalDocument}
        resultsPerPage={products.resultsPerPage}
        setPageNum={setPage}
      />
    </div>
  );
}
