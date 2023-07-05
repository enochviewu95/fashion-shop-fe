import React from "react";

export default function CardComponent({ children }) {

  return (
    <div
      className="w-full shadow-xl mx-auto my-3 rounded-xl p-6 bg-white/70"
    >
      {children}
    </div>
  );
}
