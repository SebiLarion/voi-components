import React from "react";

export default function ImageBlockCard({ bgImg }) {
  return (
    <div
      className={`max-w-screen-2xl pl-11 pr-12 relative bg-cover bg-center ${bgImg}`}
    >
      <div className="h-auto py-96 block relative"></div>
      <svg
        className="absolute left-0 fill-current text-white w-1/2 h-96 -mt-52"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,43 100,50 100,55 0,55" />
      </svg>
      <svg
        className="absolute right-0 fill-current text-white w-1/2 h-96 -mt-52"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,50 100,43 100,55 0,55" />
      </svg>
    </div>
  );
}
