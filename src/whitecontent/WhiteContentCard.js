import React from "react";

import insideWeather from "../img/inside-weather.png"




export default function WhiteContentCard() {
  return (
      <div className="whitecontent border border-black flex">
          <div className="mt-28 ml-56">
            <img src={insideWeather} alt="inside weather" />
          </div>
          <div className="ml-28 mt-44 flex flex-col">
            <h3 className="mx-auto uppercase text-xl tracking-widest">Owner</h3>
            <div className="textOwner h-auto mt-9 font-libre-baskerville text-2xl leading-10 text-dark-gray text-center ">
              <p className="mb-8">Are you an <span className="font-semibold">owner</span> who is looking for a bespoke service to promote & <span className="font-semibold">sell your property</span>? Look no further… </p>
              <p>…we can offer a wide variety of services to ensure your property reaches its <span className="font-semibold">maximum value</span> and will also take you through the sales process so it is <span className="font-semibold">simple & stress free.</span></p>
            </div>
            <button className="font-Opensans mt-24 w-48 h-12 mx-auto uppercase text-sm tracking-widest text-dark-gray border-solid border border-black">
                Read More
             </button>
          </div>
      </div>
         
  );
}
