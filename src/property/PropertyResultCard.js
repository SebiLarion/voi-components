import React from "react";
import bedrooms from "../img/bedrooms.png"
import sleeps from "../img/sleeps.png"

export default function PropertyResultCard({ property }) {
  return (
    <div className="text-red-700 flex">
      
      {/* <h1>{property.name}</h1> */}
      <img src={property.images[0].asset.fluid.src}></img>
      <div className="bg-pink-50 px-4 py-8">
      <h1 className="text-gray-500 text-2xl uppercase tracking-widest font-medium	">{property.uniqueName}</h1>
      <h4 className="text-red-700 pt-2 opacity-90">{property.location.name}</h4>
      <div className="flex py-4">
        <div className="py-4 pr-4 w-auto flex flex-col">
          <img src={bedrooms}></img>
          <h4 className="text-red-700 text-xs p-2 opacity-90">{property.bedrooms}</h4>
        </div>
        <div className="p-4 w-auto flex flex-col">
          <img src={sleeps}></img>
          <h4 className="text-red-700 text-xs p-2 opacity-90">{property.sleeps}</h4>
        </div>
        <div className="p-4 ">
          <img src={bedrooms}></img>
          <h4 className="text-red-700 text-xs py-2 opacity-90">{property.buildSize}m2</h4>
        </div>
        <div className="p-4 ">
          <img src={sleeps}></img>
          <h4 className="text-red-700 text-xs py-2 opacity-90">{property.plotSize}m2</h4>
        </div>
      </div>

      <div className="flex mt-12">
      <h1 className="text-gray-500 text-lg pr-2 tracking-widest font-medium	">Price</h1>
      <p className="text-gray-500 font-bold text-xl uppercase">{property.listPrice.toLocaleString()}&euro;</p>
      </div>
      <div>
        <p className="text-red-700 text-xs pt-2 opacity-75">Villa & Land</p>
      </div>
      
        <button className="mt-8 px-12 tracking-wide py-4 uppercase text-gray-500 text-xs font-bold border-solid border-2 border-gray-500">
          Read More
        </button>
      

      </div>
    </div>
  );
}
