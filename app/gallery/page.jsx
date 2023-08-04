import Image from "next/image";
import { galleryImages } from "@/data";

const Gallery = () => {
  return (
    <section className="bg-gray-900">
      <div className="wrapper section-padding">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          Gallery
        </h1>

        <div className="gallery-container grid">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className={`${image.orientation} overflow-hidden`}
            >
              <Image
                src={image.image}
                alt={image.orientation}
                width={500}
                height={500}
                className="hover:scale-105 duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
