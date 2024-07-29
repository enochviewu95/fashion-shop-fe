import React from "react";

const TileComponent = ({ title, data }) => {
  return (
    <div className="flex flex-col justify-center items-center h-44 rounded-2xl text-gray-500 bg-gray-50 shadow-lg">
      <h1 className="font-semibold text-4xl">{data}</h1>
      <p className="text-xs font-medium">{title}</p>
    </div>
  );
};

export default TileComponent;
