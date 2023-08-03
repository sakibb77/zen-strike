"use client";

import Button from "@/components/Button";
import { instructors } from "@/data";
import Image from "next/image";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { TfiWorld } from "react-icons/tfi";

const InstrantorDelails = ({ params }) => {
  const id = params.instructorId;

  return (
    <div className="bg-dark h-[calc(100vh-5rem)] w-screen">
      <div className="wrapper section-padding h-full">
        {instructors?.map(
          (instructor) =>
            instructor.id == id && (
              <div
                className="h-full w-full grid grid-cols-6 gap-10"
                key={instructor.id}
              >
                <div className="first-col col-span-2  flex items-center justify-center">
                  <div className="img w-96 rounded-lg overflow-hidden">
                    <Image
                      src={instructor.photo_url}
                      alt={instructor.details}
                      width={800}
                      height={800}
                    />
                  </div>
                </div>
                <div className="second-col text-light font-medium col-span-4 flex flex-col justify-center gap-4">
                  <h1 className="text-4xl text-accent1">{instructor.name}</h1>
                  <p className="">Martial Arts: {instructor.martial_arts}</p>
                  <p>{instructor.details}</p>
                  <p className="flex items-center gap-2">
                    <span>
                      <HiOutlineMail />
                    </span>
                    <span>{instructor.contact_info.email}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>
                      <HiPhone />
                    </span>
                    <span>{instructor.contact_info.phone}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span>
                      <TfiWorld />
                    </span>
                    <span>{instructor.contact_info.website}</span>
                  </p>
                  <div className="mt-10">
                    <Button
                      href={`mailto:${instructor.contact_info.email}`}
                      bText={"Contact Now"}
                    />
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default InstrantorDelails;
