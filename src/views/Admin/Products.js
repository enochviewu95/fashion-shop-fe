import React, { useContext, useEffect } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { ThemeContext } from "../../context/themeContext";
import { useDispatch, useSelector } from "react-redux";
import ProductCardComponent from "../../components/widgets/ProductCardComponent";
import { getProductAsync, productList } from "../../redux/productSlice";

export default function Products({ pageTitle }) {
  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle, setLoading] = useOutletContext();
  const dispatch = useDispatch();
  const products = useSelector(productList);

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getProductAsync("admin/api/get-products"));
    if (productList.length > 0) {
      setLoading(false);
    }
  }, [dispatch, pageTitle, setLoading, setTitle]);

  return (
    <div>
      <div className="my-5">
        <Link
          to="/fashion-shop-fe/admin/home/products/add-product"
          className={`${buttonBackground} px-3 py-2 hover:${buttonHoverBackground} text-white my-5 rounded-lg shadow-sm`}
        >
          Add Product
        </Link>
      </div>
      <div className="mt-6 gap-3 lg:grid lg:grid-cols-4 lg:gap-6">
        {products.length > 0
          ? products.map((product) => (
              <ProductCardComponent
                key={product._id}
                product={product}
                isAdmin="true"
              />
            ))
          : ""}
      </div>
    </div>
  );
}
