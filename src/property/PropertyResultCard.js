import React from "react";

export default function PropertyResultCard({ property }) {
  return (
    <div className="md:flex absolute">
      <img
        src={property.images[0].asset.fluid.src}
        alt="can arboles"
        className="w-80 h-56"
      />
      <div className="h-56 bg-light-pink">
        <h1 className="text-dark-gray text-base uppercase tracking-widest font-normal pt-4 ml-5 mr-12">
          {property.uniqueName}
        </h1>
        <h4 className="font-libre-baskerville text-xs text-dark-red ml-5">
          {property.location.name}
        </h4>
        <div className="flex ml-5 mt-2">
          <div className="grid justify-items-center mr-3.5">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1562 6.69375V1.675C22.1562 0.9875 21.425 0.4375 20.5312 0.4375H3.875C2.98125 0.4375 2.25 0.9875 2.25 1.675V6.7625C1.35625 6.96875 0.625 7.725 0.625 8.55V15.425C0.625 15.7 0.86875 15.975 1.275 15.975C1.68125 15.975 1.925 15.7688 1.925 15.425V13.9125H22.4C22.4812 13.9125 22.5625 13.9125 22.5625 13.8438V15.425C22.5625 15.7 22.8062 15.975 23.2125 15.975C23.6187 15.975 23.8625 15.7688 23.8625 15.425V8.55C23.7812 7.65625 23.05 6.9 22.1562 6.69375ZM3.875 1.46875H20.45C20.6938 1.46875 20.8562 1.60625 20.8562 1.60625V6.625H19.6375V3.53125C19.6375 2.98125 19.15 2.5 18.5813 2.5H13.8687C13.3 2.5 12.8125 2.98125 12.8125 3.53125V6.625H11.5938V3.53125C11.5938 2.98125 11.1062 2.5 10.5375 2.5H5.74375C5.175 2.5 4.6875 2.98125 4.6875 3.53125V6.625H3.46875V1.675C3.46875 1.60625 3.63125 1.46875 3.875 1.46875ZM14.0312 6.625V3.53125H18.5V6.625H14.0312ZM5.90625 6.625V3.53125H10.375V6.625H5.90625ZM2.81875 7.65625H21.5875C22.1562 7.65625 22.5625 8.06875 22.5625 8.48125V10.75C22.4813 10.75 22.4 10.6813 22.4 10.6813H1.84375V8.48125C1.84375 8.06875 2.25 7.65625 2.81875 7.65625ZM22.4 12.8125H1.84375V11.7813H22.3188C22.4 11.7813 22.4812 11.7813 22.4812 11.7125V12.8125H22.4Z"
                fill="#505050"
              />
            </svg>
            <h4 className="text-dark-red text-xs p-2 leading-3">
              {property.bedrooms}
            </h4>
          </div>
          <div className="grid justify-items-center mr-3.5">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4875 9H17.975H17.5625H1.40625V2.95C1.40625 1.91875 2.23125 1.025 3.33125 1.025C4.3625 1.025 5.1875 2.125 5.1875 2.5375C4.84375 2.8125 4.56875 3.15625 4.43125 3.5C4.0875 4.11875 4.0875 4.80625 4.29375 5.49375L4.43125 5.975L9.3125 4.325L9.175 3.84375C8.96875 3.225 8.4875 2.675 7.86875 2.4C7.31875 2.05625 6.7 1.9875 6.15 2.125C5.80625 1.23125 4.6375 0.0625 3.2625 0.0625C1.68125 0.0625 0.375 1.36875 0.375 2.95V9V9.06875V10.7188C0.375 12.7812 1.475 14.5687 3.19375 15.4625L2.50625 17.525C2.4375 17.8 2.575 18.075 2.85 18.1437C2.91875 18.1437 2.9875 18.1437 2.9875 18.1437C3.19375 18.1437 3.4 18.0063 3.46875 17.8L4.15625 15.8062C4.70625 16.0125 5.325 16.0812 5.94375 16.0812H12.475C12.8875 16.0812 13.2312 16.0125 13.575 15.9438L14.125 17.9375C14.1937 18.1437 14.4 18.2812 14.6062 18.2812C14.675 18.2812 14.7437 18.2812 14.7437 18.2812C15.0187 18.2125 15.1562 17.8687 15.0875 17.6625L14.4687 15.875C16.4625 15.05 17.8375 13.0563 17.8375 10.7875V10.1H19.35C19.625 10.1 19.9 9.89375 19.9 9.55C19.9 9.20625 19.7625 9 19.4875 9ZM6.7 3.0875C6.90625 3.0875 7.18125 3.15625 7.3875 3.225C7.59375 3.3625 7.8 3.5 7.9375 3.70625L5.1875 4.66875C5.1875 4.4625 5.25625 4.1875 5.325 3.98125C5.53125 3.6375 5.80625 3.3625 6.21875 3.225C6.35625 3.15625 6.5625 3.0875 6.7 3.0875ZM16.875 10.7188C16.875 13.1938 14.8812 15.1875 12.4062 15.1875H5.875C3.4 15.1875 1.40625 13.1938 1.40625 10.7188V10.0312H16.875V10.7188Z"
                fill="#505050"
              />
            </svg>
            <h4 className="text-dark-red text-xs p-2 leading-3">
              {property.sleeps}
            </h4>
          </div>
          <div className="grid justify-items-center mr-3.5">
            <svg
              width="24"
              height="16"
              viewBox="0 0 24 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.1562 6.69375V1.675C22.1562 0.9875 21.425 0.4375 20.5312 0.4375H3.875C2.98125 0.4375 2.25 0.9875 2.25 1.675V6.7625C1.35625 6.96875 0.625 7.725 0.625 8.55V15.425C0.625 15.7 0.86875 15.975 1.275 15.975C1.68125 15.975 1.925 15.7688 1.925 15.425V13.9125H22.4C22.4812 13.9125 22.5625 13.9125 22.5625 13.8438V15.425C22.5625 15.7 22.8062 15.975 23.2125 15.975C23.6187 15.975 23.8625 15.7688 23.8625 15.425V8.55C23.7812 7.65625 23.05 6.9 22.1562 6.69375ZM3.875 1.46875H20.45C20.6938 1.46875 20.8562 1.60625 20.8562 1.60625V6.625H19.6375V3.53125C19.6375 2.98125 19.15 2.5 18.5813 2.5H13.8687C13.3 2.5 12.8125 2.98125 12.8125 3.53125V6.625H11.5938V3.53125C11.5938 2.98125 11.1062 2.5 10.5375 2.5H5.74375C5.175 2.5 4.6875 2.98125 4.6875 3.53125V6.625H3.46875V1.675C3.46875 1.60625 3.63125 1.46875 3.875 1.46875ZM14.0312 6.625V3.53125H18.5V6.625H14.0312ZM5.90625 6.625V3.53125H10.375V6.625H5.90625ZM2.81875 7.65625H21.5875C22.1562 7.65625 22.5625 8.06875 22.5625 8.48125V10.75C22.4813 10.75 22.4 10.6813 22.4 10.6813H1.84375V8.48125C1.84375 8.06875 2.25 7.65625 2.81875 7.65625ZM22.4 12.8125H1.84375V11.7813H22.3188C22.4 11.7813 22.4812 11.7813 22.4812 11.7125V12.8125H22.4Z"
                fill="#505050"
              />
            </svg>
            <h4 className="text-dark-red text-xs py-2 leading-3">
              {property.buildSize}m2
            </h4>
          </div>
          <div className="grid justify-items-center mr-5">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.4875 9H17.975H17.5625H1.40625V2.95C1.40625 1.91875 2.23125 1.025 3.33125 1.025C4.3625 1.025 5.1875 2.125 5.1875 2.5375C4.84375 2.8125 4.56875 3.15625 4.43125 3.5C4.0875 4.11875 4.0875 4.80625 4.29375 5.49375L4.43125 5.975L9.3125 4.325L9.175 3.84375C8.96875 3.225 8.4875 2.675 7.86875 2.4C7.31875 2.05625 6.7 1.9875 6.15 2.125C5.80625 1.23125 4.6375 0.0625 3.2625 0.0625C1.68125 0.0625 0.375 1.36875 0.375 2.95V9V9.06875V10.7188C0.375 12.7812 1.475 14.5687 3.19375 15.4625L2.50625 17.525C2.4375 17.8 2.575 18.075 2.85 18.1437C2.91875 18.1437 2.9875 18.1437 2.9875 18.1437C3.19375 18.1437 3.4 18.0063 3.46875 17.8L4.15625 15.8062C4.70625 16.0125 5.325 16.0812 5.94375 16.0812H12.475C12.8875 16.0812 13.2312 16.0125 13.575 15.9438L14.125 17.9375C14.1937 18.1437 14.4 18.2812 14.6062 18.2812C14.675 18.2812 14.7437 18.2812 14.7437 18.2812C15.0187 18.2125 15.1562 17.8687 15.0875 17.6625L14.4687 15.875C16.4625 15.05 17.8375 13.0563 17.8375 10.7875V10.1H19.35C19.625 10.1 19.9 9.89375 19.9 9.55C19.9 9.20625 19.7625 9 19.4875 9ZM6.7 3.0875C6.90625 3.0875 7.18125 3.15625 7.3875 3.225C7.59375 3.3625 7.8 3.5 7.9375 3.70625L5.1875 4.66875C5.1875 4.4625 5.25625 4.1875 5.325 3.98125C5.53125 3.6375 5.80625 3.3625 6.21875 3.225C6.35625 3.15625 6.5625 3.0875 6.7 3.0875ZM16.875 10.7188C16.875 13.1938 14.8812 15.1875 12.4062 15.1875H5.875C3.4 15.1875 1.40625 13.1938 1.40625 10.7188V10.0312H16.875V10.7188Z"
                fill="#505050"
              />
            </svg>
            <h4 className="text-dark-red text-xs py-2 leading-3">
              {property.plotSize}m2
            </h4>
          </div>
        </div>
        <div className="flex mt-5 ml-5">
          <h1 className="text-dark-gray text-sm leading-5 pr-2 tracking-wider">
            Price
          </h1>
          <p className="text-dark-gray leading-5 text-sm font-semibold	tracking-wider uppercase">
            {property.listPrice.toLocaleString()}&euro;
          </p>
        </div>
        <div>
          <p className="text-dark-red text-xs leading-4 ml-5">Villa & Land</p>
        </div>
        <button className="text-xs tracking-widest leading-3 font-Opensans mt-4 ml-5 py-2 w-28 uppercase text-dark-gray border-solid border border-gray-500">
          Read More
        </button>
      </div>
    </div>
  );
}
