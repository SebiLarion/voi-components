import React from "react";

import logo from "../img/final logo.png"


export default function NavigationCard() {
  return (
      <div className="w-auto md:navigation-bar flex md:border-r md:border-b">
          <div className="md:mx-auto md:my-auto flex flex-col md:flex-row mt-6 md:mt-0">
             <div className="flex flex-col md:flex-row md:ml-2 md:items-center">
                 <a href="#" className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-Opensans pr-6">Homes</a>
                 <a href="#" className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-Opensans pr-6">Buyers</a>
                 <a href="#" className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-Opensans pr-6">Seller</a>
             </div>
             <div className="hidden md:block">
                 <img src={logo} alt="logo"/>
             </div>
             <div className="flex flex-col md:flex-row md:ml-2 md:items-center">
                 <a href="#" className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-Opensans pr-6">About us</a>
                 <a href="#" className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-Opensans pr-6">The Islander</a>
                 <a href="#" className="uppercase text-dark-gray text-xs tracking-widest mb-6 md:mb-0 font-Opensans pr-6">Contact us</a>
             </div>
          </div>
      </div>
  );
}
