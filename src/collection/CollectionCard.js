import React from "react";

export default function CollectionCard({
  name,
  imageUrl,
  children,
  className,
  url,
}) {
  return (
    <div className={`w-72 h-auto pt-8 ${className}`}>
      <h1 className="w-64 h-6 text-center mx-auto font-libre-baskerville text-base text-black">
        {name}
      </h1>
      <p className="mt-7 fontJosefin mx-8 pb-3 text-sm text-black text-center">
        {children}
      </p>
      <img src={`${imageUrl}`} className="mx-auto mt-7" />
      <button className="font-Opensans mt-11 w-48 h-12 ml-14 mb-5 uppercase text-sm tracking-widest gray border-solid border border-black">
        See Properties
      </button>
    </div>
  );
}
