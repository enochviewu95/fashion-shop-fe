import React from "react";
import DeleteItemsComponent from "./DeleteItemsComponent";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function CategoryCardComponent({
  category,
  isAdmin,
  isCategory,
}) {
  // console.log('Category',category)
  const categoryImageUrl =
    process.env.REACT_APP_BASE_URL + category.imageUrl.replace(/\\/g, "/");
  console.log("Image url", categoryImageUrl);

  return (
    <div className="group relative py-5 ">
      <div className="relative lg:h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-52 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={categoryImageUrl}
          alt={category.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div>
        <h3 className="mt-6 text-sm text-gray-900">
          <a href="#">
            <span className="absolute inset-0" />
            {category.title}
          </a>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {category.description}
        </p>
      </div>
      {isCategory ? (
        <div>
          <Link
            to={`/fashion-shop-fe/admin/home/categories/edit-category/${category._id}`}
            className="absolute top-8 left-3 w-7"
          >
            <PencilSquareIcon className="text-orange-300 hover:text-orange-500" />
          </Link>
          <DeleteItemsComponent
            isAdmin={isAdmin}
            itemId={category._id}
            deleteUrl="admin/api/delete-category"
          />
        </div>
      ) : (
        
        <DeleteItemsComponent
          isAdmin={isAdmin}
          itemId={category._id}
          deleteUrl="admin/api/delete-collection"
        />
      )}
    </div>
  );
}
