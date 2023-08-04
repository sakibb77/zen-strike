import { martialArtsDetails } from "@/data";
import Image from "next/image";

const page = ({ params }) => {
  const id = params.id;

  return (
    <section className="bg-gray-800">
      <div className="wrapper section-padding">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          Discover the Power of Martial Arts!
        </h1>
        {martialArtsDetails.map(
          (art) =>
            art.id == id && (
              <div className="grid grid-cols-2">
                <div className="w-3/4 h-full mx-auto rounded-lg overflow-hidden ">
                  <Image
                    src={art.image}
                    alt={art.name}
                    width={800}
                    height={600}
                  />
                </div>
                <div className="p-5 bg-gray-900">
                  <div className="text-light p-4 border border-gray-700 flex justify-around gap-5">
                    <div>
                      <p>{art.name}</p>
                      <p>origin: {art.origin}</p>
                    </div>
                    <div>
                      <h2 className="text-accent1 text-lg">
                        famous Practitioners
                      </h2>
                      {art.famousPractitioners.map((p) => (
                        <p className="text-white/80">0{art.id + ". " + p}</p>
                      ))}
                    </div>
                  </div>
                  <p className="text-light tracking-wide">{art.description}</p>
                </div>
              </div>
            )
        )}
      </div>
    </section>
  );
};

export default page;
