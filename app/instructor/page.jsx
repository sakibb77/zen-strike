import Image from "next/image";
import React from "react";
import Button from "../../components/Button";
import { instructors } from "@/data";

const Card = () => {
  return (
    <div className="bg-dark">
      <div className="wrapper section-padding">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          our instructor
        </h1>
        <div className="card-container w-full flex justify-center flex-wrap md:justify-between">
          {instructors.map((instructor) => (
            <div
              className="group card relative w-[calc(50%-1.25rem)] md:w-[18rem] duration-1000"
              key={instructor.id}
            >
              <Image
                src={instructor.photo_url}
                width={800}
                height={800}
                style={{ width: "100%" }}
              />

              <div className="overlay overflow-hidden h-0 -z-10 group-hover:h-full w-full absolute top-0 left-0 group-hover:z-10 bg-dark/50 flex items-center justify-center duration-300">
                <Button
                  href={`/instructor/${instructor.id}`}
                  bText="vaiw details"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
