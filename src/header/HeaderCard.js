import React from "react";

import sonnieHiles from "../img/sonnie-hiles.png"



export default function HeaderCard() {
  return (
      <div className="header flex bg-dusty-pink">
        <div className="w-5/12 relative block">
        </div>
        <div className="block w-7/12 relative">
            <img src={sonnieHiles} alt="sonnie hiles" className="h-full w-full absolute object-cover"/>
            <svg className="absolute inset-y-0 h-full fill-current text-dusty-pink w-56 -ml-28" preserveAspectRatio="none" viewBox="0 0 100 100">
                <polygon points="50,0 100,0 50,100 0,100"/>
            </svg>
        </div>
      </div>
         
  );
}
