"use client";

import { martialArtsFAQ } from "@/data";
import Image from "next/image";
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
    <div className="bg-dark border-y border-gray-700">
      <section className="wrapper section-padding">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          FAQ
        </h1>
        <div className="grid grid-cols-2 items-center justify-center">
          <div className="w-96 h-full mx-auto">
            <Image
              src={
                "https://res.cloudinary.com/doywcvyxn/image/upload/v1691053273/zen-strike/faqs/14620628_5492300_imbg9n.svg"
              }
              alt="faqs"
              width={800}
              height={1000}
            />
          </div>
          <div>
            {martialArtsFAQ.map((faq, index) => (
              <div className="faq-container w-full mx-auto" key={faq.id}>
                <div
                  className={`faq-item mt-5 bg-gray-900 flex justify-between items-center text-base p-3 shadow-sm shadow-light/30 rounded-md text-light ${
                    activeIndex === index && "text-white/80 font-semibold"
                  }`}
                >
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
                    className={`p-3 shadow-sm shadow-light/10 rounded-br-md rounded-bl-md mb-4 font-light text-light bg-gray-900`}
                  >
                    <p className={`font-light  text-light/70 text-sm`}>
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
