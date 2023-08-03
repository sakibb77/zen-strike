import Hero from "@/components/Hero";
import React from "react";
import MartialArts from "./martialarts/page";
import Card from "./instructor/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MartialArts />
      <Card />
    </div>
  );
};

export default HomePage;
