import React from "react";

import mat from "../img/mat.png";

export default function TeamCard({ bgColor, src, children }) {
  return (
    <div className={`w-72 h-auto ${bgColor}`}>
      <img src={`${src}`} />
      <div>
        <h1 className="mt-6 w-64 h-6 text-center mx-auto font-libre-baskerville text-base text-black">
          Mathew Bartley
        </h1>
        <p className="mt-3.5 mx-8 text-sm text-black text-center fontJosefin">
          {children}
        </p>
        <button className="font-Opensans mt-6 mb-7 w-48 h-12 ml-14 uppercase text-sm tracking-widest text-dark-gray border-solid border border-black">
          Contact Me
        </button>
      </div>
    </div>
  );
}
