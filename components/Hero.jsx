"use client";

import React, { useState } from "react";
import { martialArtsSliderContent } from "@/data";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //prev slide
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0
        ? martialArtsSliderContent.length - 1
        : (prevSlide) => prevSlide - 1
    );
  };
  //next slide
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === martialArtsSliderContent.length - 1
        ? 0
        : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <section className="  ">
      <div className="frame relative overflow-hidden">
        <div
          className=" slider h-[calc(100vh-5rem)] w-[400vw] flex duration-1000"
          style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
        >
          {martialArtsSliderContent.map((slide) => (
            <Slide slide={slide} key={slide.id} />
          ))}
        </div>
        <div className="btns w-[90%] lg:w-fit mx-auto absolute z-[1] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2  lg:bottom-20 lg:top-[90%] text-white flex gap-10 justify-between items-center text-2xl">
          <button
            className="prev-btn h-4 w-6  lg:h-7 lg:w-10  text-sm lg:text-lg bg-gray-700/50 shadow-sm shadow-black/30 backdrop-blur-sm hover:bg-gray-800/50 flex items-center justify-center hover:text-black/60 duration-300 border border-gray-500"
            onClick={prevSlide}
          >
            <BsArrowLeft />
          </button>
          <button
            className="next-btn h-4 w-6  lg:h-7 lg:w-10  bg-gray-700/50 shadow-sm  text-sm lg:text-lg backdrop-blur-sm hover:bg-gray-800/50 flex items-center justify-center hover:text-black/60 duration-300 border border-gray-500"
            onClick={nextSlide}
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
