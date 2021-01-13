import React from "react";

import WhiteContentCard from "./WhiteContentCard";

import image from "../img/inside-weather.png";

export default {
  title: "WhiteContentCard",
};

export const Default = () => (
  <WhiteContentCard src={image}>
    <p className="mb-10">
      Are you an <span className="font-semibold">owner</span> who is looking for
      a bespoke service to promote &{" "}
      <span className="font-semibold">sell your property</span>? Look no
      further…{" "}
    </p>
    <p>
      …we can offer a wide variety of services to ensure your property reaches
      its <span className="font-semibold">maximum value</span> and will also
      take you through the sales process so it is{" "}
      <span className="font-semibold">simple & stress free.</span>
    </p>
  </WhiteContentCard>
);
