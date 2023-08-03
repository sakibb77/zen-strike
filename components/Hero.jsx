"use client";

import React, { useState } from "react";
import Button from "./Button";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const martialArtsSliderContent = [
  {
    id: 1,
    image: "bg-slideImg1",
    title: "Unlock Your Inner Warrior",
    description:
      "Discover the ancient art of self-discipline and empowerment through martial arts training. Join us on a journey of physical and mental transformation.",
    cta: {
      buttonText: "Learn More",
      link: "/learn-more",
    },
  },
  {
    id: 2,
    image: "bg-slideImg2",
    title: "Train with the Masters",
    description:
      "Our highly skilled and experienced instructors will guide you through the secrets of various martial arts forms, from Karate and Taekwondo to Jiu-Jitsu and Kung Fu.",
    cta: {
      buttonText: "Explore Classes",
      link: "/explore-classes",
    },
  },
  {
    id: 3,
    image: "bg-slideImg3",
    title: "Build Strength and Confidence",
    description:
      "Gain more than just physical strength - our classes are designed to boost your self-confidence, enhance focus, and improve overall well-being.",
    cta: {
      buttonText: "Get Started",
      link: "/get-started",
    },
  },
  {
    id: 4,
    image: "bg-slideImg4",
    title: "A Place for Everyone",
    description:
      "No matter your age or fitness level, we welcome beginners and seasoned practitioners alike. Our classes are tailored to suit everyone's needs.",
    cta: {
      buttonText: "Join Now",
      link: "/join-now",
    },
  },
];

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
    <section className="mt-[5rem]  ">
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
