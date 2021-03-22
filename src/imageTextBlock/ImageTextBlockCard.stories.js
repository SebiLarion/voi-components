import React from "react";

import ImageTextBlockCard from "./ImageTextBlockCard";
import image from "../img/andrew-ridley.jpg";

export default {
  title: "ImageTextBlockCard",
};

export const Default = () => (
  <ImageTextBlockCard imageUrl={image}>
    When buying on the magic island, Villas of Ibiza are there to ensure the
    result truly is magical.
  </ImageTextBlockCard>
);
