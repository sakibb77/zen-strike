"use client";

import { martialArtsFAQ } from "@/data";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="bg-dark">
      <section className="wrapper section-padding">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          FAQ
        </h1>
        {martialArtsFAQ.map((faq, index) => (
          <div className="faq-container w-[45rem] mx-auto">
            <div className="faq-item flex justify-between items-center text-base p-3 shadow-sm shadow-light/50 rounded-md text-light mb-4">
              <h1>0{faq.id + ". " + faq.question}</h1>
              <span
                onClick={() => toggleAccordion(index)}
                className="text-xl cursor-pointer"
              >
                <AiOutlinePlus />
              </span>
            </div>

            {activeIndex === index && (
              <div
                className={`p-3 shadow-sm shadow-light/10 rounded-md font-light text-light`}
              >
                <p className="font-light text-light/70 text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faq;
