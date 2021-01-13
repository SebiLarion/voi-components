import React from "react";

export default function WhiteContentCard({ src, children }) {
  return (
    <div className="max-w-screen-2xl border border-black">
      <div className="flex mt-28 mb-28">
        <div className="ml-56">
          <img src={`${src}`} />
        </div>
        <div className="ml-28 mt-16 mb-12 mr-48 flex flex-col">
          <h3 className="mx-auto uppercase text-xl tracking-widest">Owner</h3>
          <div className="max-w-md h-auto mt-9 font-libre-baskerville text-2xl leading-10 text-dark-gray text-center ">
            {children}
          </div>
          <button className="font-Opensans mt-24 w-48 h-12 mx-auto uppercase text-sm tracking-widest text-dark-gray border-solid border border-black">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
