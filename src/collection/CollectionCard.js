import React from "react";

export default function CollectionCard({ bgColor, src, children }) {
  return (
    <div className={`w-72 h-auto pt-8 ${bgColor}`}>
      <h1 className="w-64 h-6 text-center mx-auto font-libre-baskerville text-base text-black">
        Country Homes
      </h1>
      <p className="mt-7 fontJosefin mx-8 pb-3 text-sm text-black text-center">
        {children}
      </p>
      <img src={`${src}`} className="mx-auto mt-7" />
      <button className="font-Opensans mt-11 w-48 h-12 ml-14 mb-5 uppercase text-sm tracking-widest gray border-solid border border-black">
        See Properties
      </button>
    </div>
  );
}
