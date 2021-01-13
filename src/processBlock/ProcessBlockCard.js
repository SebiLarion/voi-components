import React from "react";

import logo from "../img/final logo-transparent.png";

export default function ProcessBlockCard({ bgColor }) {
  return (
    <div
      className={`max-w-screen-2xl h-auto relative bg-cover bg-center ${bgColor}`}
    >
      <div className="mx-52 text-white flex flex-col">
        <h3 className="text-center text-lg mt-20 mb-6 fontJosefin">
          OUR SELLING PROCESS
        </h3>
        <h1 className="text-2xl text-center mb-14 font-libre-baskerville px-8">
          Below is our standard selling process, but we offer a boutique service
          where we can tailor each step to suit your specific needs &
          requiremnets.
        </h1>
        <div className="flex justify-between mb-14">
          <div className="grid justify-items-center">
            <div className="w-28 mb-4 border border-white px-4 py-2">
              Step One
            </div>
            <div className="w-6 mb-4 border-l-2 border-white py-6 "></div>
            <div className="w-48 px-2 leading-10 text-center font-libre-baskerville">
              <p className="text-base pb-2">Marketing Strategy </p>
              <p className="text-xs">
                We build a bespoke marketing strategy that will introduce your
                home to as many relevant buyers as possible
              </p>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="w-28 mb-4 border border-white px-4 py-2">
              Step One
            </div>
            <div className="w-6 mb-4 border-l-2 border-white py-6 "></div>
            <div className="w-48 px-2 leading-10 text-center font-libre-baskerville">
              <p className="text-base pb-2">Marketing Strategy </p>
              <p className="text-xs">
                We build a bespoke marketing strategy that will introduce your
                home to as many relevant buyers as possible
              </p>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="w-28 mb-4 border border-white px-4 py-2">
              Step One
            </div>
            <div className="w-6 mb-4 border-l-2 border-white py-6 "></div>
            <div className="w-48 px-2 leading-10 text-center font-libre-baskerville">
              <p className="text-base pb-2">Marketing Strategy </p>
              <p className="text-xs">
                We build a bespoke marketing strategy that will introduce your
                home to as many relevant buyers as possible
              </p>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="w-28 mb-4 border border-white px-4 py-2">
              Step One
            </div>
            <div className="w-6 mb-4 border-l-2 border-white py-6 "></div>
            <div className="w-48 px-2 leading-10 text-center font-libre-baskerville">
              <p className="text-base pb-2">Marketing Strategy </p>
              <p className="text-xs">
                We build a bespoke marketing strategy that will introduce your
                home to as many relevant buyers as possible
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-36">
          <div className="grid justify-items-center">
            <div className="w-28 mb-4 border border-white px-4 py-2">
              Step One
            </div>
            <div className="w-6 mb-4 border-l-2 border-white py-6 "></div>
            <div className="w-48 px-2 leading-10 text-center font-libre-baskerville">
              <p className="text-base pb-2">Marketing Strategy </p>
              <p className="text-xs">
                We build a bespoke marketing strategy that will introduce your
                home to as many relevant buyers as possible
              </p>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="w-28 mb-4 border border-white px-4 py-2">
              Step One
            </div>
            <div className="w-6 mb-4 border-l-2 border-white py-6 "></div>
            <div className="w-48 px-2 leading-10 text-center font-libre-baskerville">
              <p className="text-base pb-2">Marketing Strategy </p>
              <p className="text-xs">
                We build a bespoke marketing strategy that will introduce your
                home to as many relevant buyers as possible
              </p>
            </div>
          </div>
          <div className="grid justify-items-center">
            <div className="w-28 mb-4 border border-white px-4 py-2">
              Step One
            </div>
            <div className="w-6 mb-4 border-l-2 border-white py-6 "></div>
            <div className="w-48 px-2 leading-10 text-center font-libre-baskerville">
              <p className="text-base pb-2">Marketing Strategy </p>
              <p className="text-xs">
                We build a bespoke marketing strategy that will introduce your
                home to as many relevant buyers as possible
              </p>
            </div>
          </div>
          <div className="grid justify-items-center">
            <img src={logo} alt="logo" />
          </div>
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
