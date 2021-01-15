import React from "react";

export default function SearchBoxCard({ bgColor }) {
  return (
    <div className={`w-auto lg:max-w-screen-xl h-auto ${bgColor}`}>
      <div className="mx-auto px-7 py-7 lg:pt-10">
        <form className="flex flex-col lg:flex-row bg-white bg-opacity-50">
          <input
            type="text"
            id="priceFrom"
            name="priceFrom"
            placeholder="PRICE FROM"
            className="lg:ml-6 mx-auto my-4 text-dark-gray bg-white text-xs p-2"
          ></input>
          <input
            type="text"
            id="priceTo"
            name="priceTo"
            placeholder="PRICE TO"
            className="lg:ml-6 mx-auto my-4 text-dark-gray bg-white text-xs p-2"
          ></input>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="LOCATION"
            className="lg:ml-6 mx-auto my-4 text-dark-gray bg-white text-xs p-2"
          ></input>
          <input
            type="text"
            id="type"
            name="type"
            placeholder="TYPE"
            className="lg:ml-6 mx-auto my-4 text-dark-gray bg-white text-xs p-2"
          ></input>
          <input
            type="text"
            id="bedrooms1"
            name="bedrooms1"
            placeholder="BEDROOMS"
            className="lg:ml-6 mx-auto my-4 text-dark-gray bg-white text-xs p-2"
          ></input>
          <input
            type="text"
            id="priceFrom"
            name="priceFrom"
            placeholder="BEDROOMS"
            className="lg:ml-6 mx-auto my-4 text-dark-gray bg-white text-xs p-2"
          ></input>
          <button className="lg:w-8 lg:h-8 p-2 m-4 bg-white lg:rounded-full">
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
          </button>
        </form>
      </div>
    </div>
  );
}
