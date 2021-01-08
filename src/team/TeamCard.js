import React from "react";

import mat from "../img/mat.png"


export default function TeamCard() {
  return (
      <div className="teamcard">
         <img src={mat} alt="Mathew Bartley"/>
         <div>
             <h1 className="mt-6 w-64 h-6 text-center mx-auto font-libre-baskerville text-base text-black">Mathew Bartley</h1>
             <p className="mt-3.5 font-brandon mx-8 text-sm text-black text-center">
                Having lived in Ibiza for more than 15 years, Ajay has an intimate knowledge of the island, 
                its many wonderful homes and the unique qualities of each of them, helping him to find you the perfect property and
                guide you through the process of making Ibiza your home.
             </p>
             <button className="font-Opensans mt-8 w-48 h-12 ml-14 uppercase text-sm tracking-widest gray border-solid border border-black">
                Contact Me
             </button>
         </div>
      </div>
   
  );
}
