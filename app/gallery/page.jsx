import Image from "next/image";
import { galleryImages } from "@/data";

const Gallery = () => {
  return (
    <section className="bg-gray-800">
      <div className="wrapper section-padding">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          Gallery
        </h1>

        <div className="gallery-container grid">
          {galleryImages.map((image) => (
            <div key={image.id} className={image.orientation} h-full w-full>
              <Image
                src={image.image}
                alt={image.orientation}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
