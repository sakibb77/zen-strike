import Image from "next/image";
import React from "react";

const instructors = [
  {
    id: 1,
    name: "Michael Smith",
    details:
      "6th-degree black belt in Karate. 15 years of teaching experience. Known for his precise techniques and focus on discipline.",
    martial_arts: "Karate",
    contact_info: {
      email: "michael.smith@example.com",
      phone: "+1 (555) 123-4567",
      website: "https://www.example.com/michael_smith",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983864/zen-strike/instructors/instructor_xxvn8b.webp",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    details:
      "4th-degree black belt in Jiu-Jitsu. Competed in multiple international tournaments and holds several championship titles.",
    martial_arts: "Jiu-Jitsu",
    contact_info: {
      email: "sarah.johnson@example.com",
      phone: "+1 (555) 987-6543",
      website: "https://www.example.com/sarah_johnson",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983714/zen-strike/instructors/instructor-1_swx1ma.jpg",
  },
  {
    id: 3,
    name: "Robert Wang",
    details:
      "Taekwondo master. Trained several national champions. His classes focus on speed, agility, and Olympic-style sparring.",
    martial_arts: "Taekwondo",
    contact_info: {
      email: "robert.wang@example.com",
      phone: "+1 (555) 567-8901",
      website: "https://www.example.com/robert_wang",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983714/zen-strike/instructors/instructor-3_b0x3yn.jpg",
  },
  {
    id: 4,
    name: "Amanda Davis",
    details:
      "3rd-degree black belt in Muay Thai. Specializes in advanced striking techniques and clinch work.",
    martial_arts: "Muay Thai",
    contact_info: {
      email: "amanda.davis@example.com",
      phone: "+1 (555) 234-5678",
      website: "https://www.example.com/amanda_davis",
    },
    photo_url:
      "https://res.cloudinary.com/doywcvyxn/image/upload/v1690983714/zen-strike/instructors/instructor-2_ziyl2d.jpg",
  },
];

const Card = () => {
  return (
    <div className="bg-dark">
      <div className="wrapper section-padding">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          our instructor
        </h1>
        <div className="card-container w-full flex justify-center flex-wrap gap-5">
          {instructors.map((instructor) => (
            <div className="card w-[calc(50% - 1.25rem)] md:w-1/4 ">
              <Image
                src={instructor.photo_url}
                width={800}
                height={800}
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
