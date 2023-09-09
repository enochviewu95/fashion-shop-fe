import React from "react";
import DeleteItemsComponent from "./DeleteItemsComponent";
import { Link } from "react-router-dom";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function CategoryCardComponent({
  item,
  isAdmin,
  isCategory,
  deleteFunc,
}) {
  const categoryImageUrl =
    process.env.REACT_APP_BASE_URL + item.imageUrl.replace(/\\/g, "/");

  return (
    <article className="group relative py-5 ">
      <Link to="/list/category">
        <div className="relative lg:h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-52 lg:aspect-w-1 lg:aspect-h-1">
          <img
            src={categoryImageUrl}
            alt={item.title}
            width={274}
            height={320}
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </Link>
      <div>
        <h3 className="mt-6 text-sm text-gray-900">
          <Link to="/list/category">
            <span className="absolute inset-0" />
            {item.title}
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {item.description}
        </p>
      </div>
      {isCategory ? (
        <div>
          <Link
            to={`/admin/home/categories/edit-category/${item._id}`}
            className={isAdmin ? "absolute top-8 left-3 w-7" : "hidden"}
          >
            <PencilSquareIcon className="text-orange-300 hover:text-orange-500" />
          </Link>
          <DeleteItemsComponent
            isAdmin={isAdmin}
            itemId={item._id}
            deleteFunc={deleteFunc}
          />
        </div>
      ) : (
        <div>
          <Link
            to={`/admin/home/collections/edit-collection/${item._id}`}
            className={isAdmin ? "absolute top-8 left-3 w-7" : "hidden"}
          >
            <PencilSquareIcon className="text-orange-300 hover:text-orange-500" />
          </Link>
          <DeleteItemsComponent
            isAdmin={isAdmin}
            itemId={item._id}
            deleteFunc={deleteFunc}
          />
        </div>
      )}
    </article>
  );
}
