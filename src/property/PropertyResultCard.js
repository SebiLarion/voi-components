import React from "react";
import bedrooms from "../img/bedrooms.png"
import sleeps from "../img/sleeps.png"

export default function PropertyResultCard({ property }) {
  return (
    <div className="md:flex absolute">
      <img src={property.images[0].asset.fluid.src} alt="can arboles"className="picture"/>
      <div className="details bg-light-pink">
        <h1 className="text-dark-gray text-base uppercase tracking-widest font-normal pt-4 ml-5 mr-12">{property.uniqueName}</h1>
        <h4 className="font-libre-baskerville text-xs text-dark-red ml-5">{property.location.name}</h4>
        <div className="flex ml-5 mt-1">
          <div className="grid justify-items-center mr-3.5">
            <img src={bedrooms} alt="bedrooms"/>
            <h4 className="text-dark-red text-xs p-2 leading-3">{property.bedrooms}</h4>
          </div>
          <div className="grid justify-items-center mr-3.5">
            <img src={sleeps} alt="sleeps"/>
            <h4 className="text-dark-red text-xs p-2 leading-3">{property.sleeps}</h4>
          </div>
          <div className="grid justify-items-center mr-3.5">
            <img src={bedrooms} alt="bedrooms"/>
            <h4 className="text-dark-red text-xs py-2 leading-3">{property.buildSize}m2</h4>
          </div>
          <div className="grid justify-items-center mr-5">
            <img src={sleeps} alt="sleeps"/>
            <h4 className="text-dark-red text-xs py-2 leading-3">{property.plotSize}m2</h4>
          </div>
        </div>
        <div className="flex mt-8 ml-5">
          <h1 className="text-dark-gray text-sm leading-5 pr-2 tracking-wider font-brandon">Price</h1>
          <p className="text-dark-gray leading-5 font-brandon text-sm font-semibold	tracking-wider uppercase">{property.listPrice.toLocaleString()}&euro;</p>
        </div>
        <div>
          <p className="text-dark-red text-xs leading-4 ml-5">Villa & Land</p>
        </div>
        <button className="button font-Opensans mt-2 ml-5 pt-2.5 pb-2 w-28 uppercase text-dark-gray border-solid border border-gray-500">
            Read More
        </button>
      </div>
    </div>
  );
}
