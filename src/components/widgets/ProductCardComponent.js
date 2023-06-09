import React from "react";
import DeleteItemsComponent from "./DeleteItemsComponent";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
export default function ProductCardComponent({ product, isAdmin }) {
  const productImageUrl =
    process.env.REACT_APP_BASE_URL + product.imageUrl.replace(/\\/g, "/");

  return (
    <article className="group relative py-5">
      <div className="min-h-80 h-52 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={productImageUrl}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          loading="lazy"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link >
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          &#163; {product.price["$numberDecimal"]}
        </p>
      </div>
      <Link
        to={`/fashion-shop-fe/admin/home/products/edit-product/${product._id}`}
        className={isAdmin ? "absolute top-8 left-3 w-7" : "hidden"}
      >
        <PencilSquareIcon className="text-orange-300 hover:text-orange-500" />
      </Link>
      <DeleteItemsComponent
        isAdmin={isAdmin}
        itemId={product._id}
        deleteUrl="admin/api/delete-product"
      />
    </article>
  );
}
