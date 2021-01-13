import React from "react";

export default function ImageTextBlockCard({ bgImg, children }) {
  return (
    <div
      className={`max-w-screen-2xl pl-11 pr-12 relative bg-cover bg-center ${bgImg}`}
    >
      <div className="pt-10 pb-11 xl:pt-60 xl:pb-40">
        <div className="flex flex-col items-center">
          <div className="text-white font-libre-baskerville h-auto w-auto text-center text-xs lg:text-2xl mx:auto xl:mx-64">
            {children}
          </div>
          <button className="font-Opensans mt-8 lg:mt-16 py-2 w-24 h-auto lg:w-48 lg:h-12 mx-auto uppercase text-xs lg:text-sm tracking-widest text-white border-solid border border-white">
            See More
          </button>
        </div>
      </div>
      <svg
        className="absolute left-0 text-white w-1/2 fill-current h-96 -mt-52"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,40 100,50 100,55 0,55" />
      </svg>
      <svg
        className="absolute right-0 fill-current text-white w-1/2 h-96 -mt-52"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,50 100,40 100,55 0,55" />
      </svg>
    </div>
  );
}
