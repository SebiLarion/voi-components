import React from "react";


export default function ImageBlockCard() {
  return (
      <div className="image-block relative bg-img-block bg-cover bg-center">
        
         <svg className="absolute fill-current text-white w-1/2 mt-48" preserveAspectRatio="none" viewBox="0 0 100 100">
             <polygon points="0,43 100,50 100,55 0,55"/>
        </svg>
         <svg className="absolute right-0 fill-current text-white w-1/2 mt-48" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,50 100,43 100,55 0,55"/>
        </svg>
      </div>
  );
}