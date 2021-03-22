import React from "react";

export default function ColorTextBlockCard({ className, children }) {
  return (
    <div className={`w-auto h-auto ${className}`}>
      <div className="pt-10 pb-11 lg:pt-40 lg:pb-44">
        <div className="text-white font-libre-baskerville h-auto w-auto text-center text-xs lg:text-2xl lg:mx-72">
          {children}
        </div>
      </div>
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
