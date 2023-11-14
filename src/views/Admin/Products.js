import React, { useContext, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import ProductCardComponent from "../../components/widgets/ProductCardComponent";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "../../redux/services/product";
import LoadingComponent from "../../components/widgets/LoadingComponent";

export default function Products({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const { data: products, isLoading } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();

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
    </div>
  );
}
