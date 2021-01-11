import React from "react";


export default function ImageTextBlockCard() {
  return (
      <div className="image-block relative bg-img-text-block bg-cover bg-center">
        <div className="pt-60">
            <div className="flex flex-col items-center">
                <div className="text-white font-libre-baskerville h-auto w-auto text-center text-2xl mx-72">
                    When buying on the magic island, Villas of Ibiza are there to ensure the result truly is magical.
                </div>
                <button className="font-Opensans mt-16 pt-2 w-48 h-12 mx-auto uppercase text-sm tracking-widest text-white border-solid border border-white">
                    See More
                </button>
            </div>
        </div>

         <svg className="absolute text-white w-1/2 fill-current -mt-60" preserveAspectRatio="none" viewBox="0 0 100 100">
             <polygon points="0,43 100,50 100,55 0,55"/>
        </svg>
         <svg className="absolute right-0 fill-current text-white w-1/2 -mt-60" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,50 100,43 100,55 0,55"/>
        </svg>
      </div>
  );
}