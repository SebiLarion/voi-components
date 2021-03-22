import React from "react";

import logo from "../img/final logo.png";

export default function NavigationCard() {
  return (
    <div className="w-auto flex md:border-b md:shadow">
      <div className="mx-auto my-auto flex flex-col md:flex-row mt-6 md:mt-0">
        <div className="mb-4">
          <img src={logo} alt="logo" />
        </div>
        <div className="flex flex-col md:flex-row md:ml-96 md:items-center">
          <a
            href="#"
            className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 fontJosefin pr-6"
          >
            Search
          </a>
          <a
            href="#"
            className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 fontJosefin pr-6"
          >
            I am a Buyers
          </a>
          <a
            href="#"
            className="uppercase text-yellow-400 text-xs tracking-widest mb-6 md:mb-0 fontJosefin pr-6"
          >
            I am a Seller
          </a>
        </div>

        <div className="flex flex-col md:flex-row md:ml-20 md:items-center">
          <a
            href="#"
            className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-libre-baskerville pr-6"
          >
            <div className="flex">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4375 9.8125C11.3125 8.8125 11.875 7.4375 11.875 6C11.875 2.75 9.25 0.125 6 0.125C2.75 0.125 0.125 2.75 0.125 6C0.125 9.25 2.75 11.875 6 11.875C7.4375 11.875 8.75 11.3125 9.8125 10.4375L13.375 14C13.4375 14.0625 13.5625 14.125 13.6875 14.125C13.8125 14.125 13.9375 14.0625 14 14C14.1875 13.8125 14.1875 13.5 14 13.3125L10.4375 9.8125ZM1.0625 6C1.0625 3.25 3.25 1.0625 6 1.0625C8.75 1.0625 10.9375 3.25 10.9375 6C10.9375 8.75 8.75 10.9375 6 10.9375C3.25 10.9375 1.0625 8.75 1.0625 6Z"
                  fill="#BD7F80"
                />
              </svg>
              <span className="ml-2 font-semibold">The Islander</span>
            </div>
          </a>
          <a
            href="#"
            className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-Opensans pr-6"
          >
            <button className="uppercase border border-solid border-dark-gray pt-2 pb-2 px-10">
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
