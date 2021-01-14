import React from "react";

import logo from "../img/final logo-transparent.png";

export default function FooterCard({ bgColor }) {
  return (
    <div
      className={`max-w-screen-2xl w-auto h-auto md:h-72 relative ${bgColor}`}
    >
      <div className="flex flex-col md:flex-row ml-20 pt-5  md:ml-28 md:pt-24">
        <div className="w-24 h-24 mb-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col text-white md:ml-20 mb-5 pt-6 md:pt-0">
          <h3 className="uppercase text-sm fontJosefin tracking-widest leading-4 mb-3.5 text-gray-300">
            Contact Us
          </h3>
          <p className="font-libre-baskerville text-sm">Sell your home</p>
          <p className="font-libre-baskerville text-sm">Buy a home </p>
          <p className="font-libre-baskerville text-sm">+ 34 680 66 14 72</p>
          <p className="font-libre-baskerville text-sm text-yellow-400">
            info@villasofibiza.com
          </p>
        </div>
        <div className="flex md:flex-col md:ml-20">
          <button className="w-8 h-8 mb-3 rounded-full bg-white mr-3"></button>
          <button className="w-8 h-8 mb-3 rounded-full bg-white mr-3"></button>
          <button className="w-8 h-8 rounded-full bg-white"></button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row ml-20 mt-6 text-xs text-white">
        <div className="md:ml-auto mr-3 mb-3">
          © villas of ibiza 2020{" "}
          <span className="ml-3 hidden sm:inline-block">|</span>
        </div>
        <div className="mr-3 mb-3">
          terms & conditions{" "}
          <span className="ml-3 hidden sm:inline-block">|</span>
        </div>
        <div className="md:mr-28 mb-3">privacy policy</div>
      </div>
    </div>
  );
}
