import React from "react";
import Button from "./Button";

const Slide = ({ slide }) => {
  return (
    <div
      key={slide.id}
      className={`slide h-full w-full ${slide.image} bg-cover bg-no-repeat`}
    >
      <div className="wrapper h-full w-full flex">
        <div className="h-full w-1/2 section-padding"></div>
        <div className="slide-content h-full w-1/2 section-padding flex flex-col  justify-center gap-8 ">
          <h2 className="text-5xl font-semibold uppercase text-accent1 ">
            {slide.title}
          </h2>
          <p className=" text-light text-lg">{slide.description}</p>
          <Button href={slide.cta.link} bText={`${slide.cta.buttonText}→`} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
