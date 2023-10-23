import React, { useState } from "react";
import DeleteItemsComponent from "./DeleteItemsComponent";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import ProductQuickviews from "./ProductQuickviews";


export default function ProductCardComponent({ product, isAdmin, deleteFunc }) {
  const productImageUrl =
    process.env.REACT_APP_BASE_URL + product.imageUrl.replace(/\\/g, "/");

    const [open, setOpen] = useState(false);

  return (
    <article className="group relative py-5">
      <div onClick={()=> setOpen(true)}>
        <div className="min-h-80 h-52 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={productImageUrl}
            alt={product.title}
            width={274}
            height={320}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div className="w-10 lg:w-fit">
          <h3 className="text-sm text-gray-700">
            <div  onClick={()=> setOpen(true)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </div>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">
          &#163; {product.price["$numberDecimal"]}
        </p>
      </div>
      <Link
        to={`/admin/home/products/edit-product/${product._id}`}
        className={isAdmin ? "absolute top-8 left-3 w-7" : "hidden"}
      >
        <PencilSquareIcon className="text-orange-300 hover:text-orange-500" />
      </Link>
      <DeleteItemsComponent
        isAdmin={isAdmin}
        itemId={product._id}
        deleteFunc={deleteFunc}
      />
      <ProductQuickviews open={open} setOpen={setOpen} productId={product._id} />
    </article>
  );
}
