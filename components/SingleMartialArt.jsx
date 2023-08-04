import Image from "next/image";
import Button from "./Button";

const SingleMartialArts = ({ martialArt }) => {
  return (
    <div
      className=" grid grid-cols-2 flex-col-reverse my-20 items-center justify-center"
      key={martialArt.id}
    >
      <div
        className={`content flex flex-col gap-5 ${
          martialArt.id % 2 === 0 ? "order-last" : null
        }`}
      >
        <span className="text-7xl font-bold text-light/10">
          0{martialArt.id}
        </span>
        <div>
          <h2 className="uppercase tracking-wider text-lg font-semibold text-accent2">
            {martialArt.name}
          </h2>
          <p className="font-light tracking-wide">{martialArt.description}</p>
        </div>
        <Button
          href={`/martialarts/${martialArt.id}`}
          bText="read more"
          color="green"
        />
      </div>
      <div className="image relative flex items-center justify-center">
        <div className="z-[2]">
          <Image
            src={martialArt.image}
            alt={martialArt.description}
            height={400}
            width={300}
          />
        </div>

        <div className="absolute  w-[40rem] -z-[0]">
          <Image
            src={
              "https://res.cloudinary.com/doywcvyxn/image/upload/v1691059221/zen-strike/diffarent-martial-arts-image/blob_1_mwjg8v.svg"
            }
            height={1200}
            width={1200}
            alt={"svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleMartialArts;
