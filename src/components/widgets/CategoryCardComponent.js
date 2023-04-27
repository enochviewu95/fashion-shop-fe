import React from "react";

export default function CategoryCardComponent({ category }) {

  // console.log('Category',category)
  const categoryImageUrl = process.env.REACT_APP_BASE_URL + category.imageUrl.replace(/\\/g, "/")
  console.log('Image url',categoryImageUrl)

  return (
    <div className="group relative py-5 ">
      <div className="relative lg:h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 h-52 lg:aspect-w-1 lg:aspect-h-1">
        <img
          src={categoryImageUrl}
          alt={category.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
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
  );
}
