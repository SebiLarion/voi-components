import React from "react";

export default function ColorTextBlockCard({ bgColor, children }) {
  return (
    <div className={`color-block relative ${bgColor}`}>
      <div className="pt-40">
        <div className="text-white font-libre-baskerville h-auto w-auto text-center text-2xl mx-72">
          {children}
        </div>
      </div>
      <svg
        className="absolute fill-current text-white w-1/2 -mt-44"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,43 100,50 100,55 0,55" />
      </svg>
      <svg
        className="absolute right-0 fill-current text-white w-1/2 -mt-44"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <polygon points="0,50 100,43 100,55 0,55" />
      </svg>
    </div>
  );
}
