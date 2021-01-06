import React from "react";

import PropertyResultCard from "./PropertyResultCard";

import property from "../../data/property.json";

export default {
  title: "PropertyResultCard",
};

export const Default = () => <PropertyResultCard property={property} />;
