import Hero from "@/components/Hero";
import React from "react";
import MartialArts from "./martialarts/page";
import Card from "./instructor/page";
import Faq from "@/components/Faq";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MartialArts />
      <Card />
      <Faq />
    </div>
  );
};

export default HomePage;
