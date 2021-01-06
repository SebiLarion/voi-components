import React from "react";

export default function PropertyResultCard({ property }) {
  return (
    <div className="text-red-300">
      <h1>{property.name}</h1>
    </div>
  );
}
