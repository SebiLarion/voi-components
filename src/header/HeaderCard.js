import React from "react";

export default function HeaderCard({ color, src }) {
  return (
    <div className="max-w-screen-2xl pl-11 pr-12 h-auto">
      <div className={`flex w-auto h-96 bg-${color}`}>
        <div className="w-5/12 relative block"></div>
        <div className="block w-7/12 relative">
          <img
            src={`${src}`}
            alt="sonnie hiles"
            className="h-full w-full absolute object-cover"
          />
          <svg
            className={`absolute inset-y-0 h-full fill-current w-20 -ml-10 sm:w-56 sm:-ml-28 text-${color}`}
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
        </div>
      </div>
    </div>
  );
}
