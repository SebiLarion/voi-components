import React from "react";

import collectionImage from "../img/collectionImage.png"


export default function CollectionCard() {
  return (
      <div className="collection bg-soft-pink pt-8"> 
             <h1 className="w-64 h-6 text-center mx-auto font-libre-baskerville text-base text-black">Country Homes</h1>
             <p className="mt-7 fontJosefin mx-8 pb-3 text-sm text-black text-center">
             Ibiza’s climate and the stunning countryside offer a complete escape from city life which is an increasingly inviting 
             proposition in an ever changing world. Within this collection are a selection of incredible homes nestled in the 
             magnificent Ibizan countryside. Perfect for those looking for a different way to live.
             </p>
             <img src={collectionImage} alt="Colection Image" className="mx-auto mt-7"/>
             <button className="font-Opensans mt-11 w-48 h-12 ml-14 uppercase text-sm tracking-widest gray border-solid border border-black">
                See Properties
             </button>
      </div>
         
  );
}
