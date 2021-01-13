import React from "react";

import TeamCard from "./TeamCard";

import image from "../img/mat.png";

export default {
  title: "TeamCard",
};

export const Default = () => (
  <TeamCard bgColor="bg-white-pink" src={image}>
    Having lived in Ibiza for more than 15 years, Ajay has an intimate knowledge
    of the island, its many wonderful homes and the unique qualities of each of
    them, helping him to find you the perfect property and guide you through the
    process of making Ibiza your home.
  </TeamCard>
);
