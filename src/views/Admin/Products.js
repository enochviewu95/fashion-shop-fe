import React, { useContext, useEffect } from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import { ThemeContext } from '../../themeContext';
import { useDispatch, useSelector } from 'react-redux';
import ProductCardComponent from '../../components/widgets/ProductCardComponent';
import { getProductAsync, productList } from '../../redux/productSlice';

export default function Products({pageTitle}) {

  // const products = [
  //   {
  //     id: 1,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 2,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 3,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 4,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 5,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 6,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 7,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  //   {
  //     id: 8,
  //     name: "Basic Tee",
  //     href: "#",
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
  //     imageAlt: "Front of men's Basic Tee in black.",
  //     price: "$35",
  //     color: "Black",
  //   },
  // ];

  const { buttonBackground, buttonHoverBackground } = useContext(ThemeContext);
  const [setTitle] = useOutletContext();
  const dispatch = useDispatch();
  const products = useSelector(productList);

  useEffect(() => {
    setTitle(pageTitle);
    dispatch(getProductAsync("admin/api/get-products"));
  }, [ dispatch, pageTitle, setTitle]);


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
      {products.map((product) => (
        <ProductCardComponent key={product.id} product={product} />
      ))}
    </div>
  </div>
  )
}
