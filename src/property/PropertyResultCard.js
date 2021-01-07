import React from "react";
import bedrooms from "../img/bedrooms.png"
import sleeps from "../img/sleeps.png"

export default function PropertyResultCard({ property }) {
  return (
    <div className="md:flex absolute w-auto h-96">
      <img src={property.images[0].asset.fluid.src} alt="can arboles"className="w-auto"/>
      <div className="details px-6 py-4">
        <h1 className="font-brandon gray text-xl uppercase tracking-widest font-normal mt-4 mb-1">{property.uniqueName}</h1>
        <h4 className="font-libre-baskerville text-sm red">{property.location.name}</h4>
        <div className="flex py-4">
          <div className="py-3 pr-3 grid justify-items-center">
            <img src={bedrooms} alt="bedrooms" className="w-9 h-7"/>
            <h4 className="red text-xs p-2 leading-3">{property.bedrooms}</h4>
          </div>
          <div className="p-3 grid justify-items-center">
            <img src={sleeps} alt="sleeps" className="w-7 h-6"/>
            <h4 className="red text-xs p-2 leading-3">{property.sleeps}</h4>
          </div>
          <div className="p-3 grid justify-items-center">
            <img src={bedrooms} alt="bedrooms" className="w-9 h-7"/>
            <h4 className="red text-xs py-2 leading-3">{property.buildSize}m2</h4>
          </div>
          <div className="p-3 grid justify-items-center">
            <img src={sleeps} alt="sleeps" className="w-7 h-6"/>
            <h4 className="red text-xs py-2 leading-3">{property.plotSize}m2</h4>
          </div>
        </div>

        <div className="flex mt-10">
          <h1 className="gray text-lg leading-5 pr-2 tracking-widest font-brandon">Price</h1>
          <p className="gray leading-5 font-brandon text-xl font-semibold	tracking-widest uppercase">{property.listPrice.toLocaleString()}&euro;</p>
        </div>
        <div>
          <p className="red text-sm leading-3 pt-2 font-brandon font-thin opacity-90">Villa & Land</p>
        </div>
        <button className="font-Opensans mt-8 px-12 tracking-widest py-3 uppercase gray text-xs border-solid border-2 border-gray-500">
            Read More
        </button>
      </div>
    </div>
  );
}
