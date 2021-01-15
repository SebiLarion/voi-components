import React from "react";

import CollectionCard from "./CollectionCard";

import image from "../img/collectionImage.png";

export default {
  title: "CollectionCard",
};

export const Default = () => (
  <CollectionCard
    name="Test Collection"
    className="bg-soft-pink"
    imageUrl={image}
  >
    Ibiza’s climate and the stunning countryside offer a complete escape from
    city life which is an increasingly inviting proposition in an ever changing
    world. Within this collection are a selection of incredible homes nestled in
    the magnificent Ibizan countryside. Perfect for those looking for a
    different way to live.
  </CollectionCard>
);
