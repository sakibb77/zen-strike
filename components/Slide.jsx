import React from "react";
import Button from "./Button";
import Image from "next/image";

const Slide = ({ slide }) => {
  return (
    <div
      key={slide.id}
      className={`slide h-full w-full ${slide.image} bg-cover bg-no-repeat`}
    >
      <div className="wrapper h-full w-full flex">
        <div className="slide-content h-full w-1/2 section-padding flex flex-col  justify-center gap-8 ">
          <h2 className="text-5xl font-semibold uppercase text-accent1 ">
            {slide.title}
          </h2>
          <p className=" text-light tracking-wide text-lg">
            {slide.description}
          </p>
          <Button href={slide.cta.link} bText={`${slide.cta.buttonText}→`} />
        </div>
        <div className="h-full relative w-1/2 section-padding flex items-center justify-center">
          <div className="w-[40rem]">
            <Image
              src={
                "https://res.cloudinary.com/doywcvyxn/image/upload/v1691042830/zen-strike/slider/blob_tsw7pw.svg"
              }
              alt="svg"
              width={800}
              height={800}
            />
          </div>
          <div className="img w-96 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src={slide.image} alt="" width={800} height={800} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
