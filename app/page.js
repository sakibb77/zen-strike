import Hero from "@/components/Hero";
import React from "react";
import MartialArts from "./martialarts/page";
import Card from "./instructor/page";
import Faq from "@/components/Faq";
import Gallery from "./gallery/page";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <MartialArts />
      <Card />
      <Gallery />
      <Faq />
    </div>
  );
};

export default HomePage;
