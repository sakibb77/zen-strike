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
          <p className="font-light ">{martialArt.description}</p>
        </div>
        <Button
          href={`/martialArts/${martialArt.id}`}
          bText="read more"
          color="outline"
        />
      </div>
      <div className="image flex items-center justify-center">
        <Image src={martialArt.image} height={400} width={300} />
      </div>
    </div>
  );
};

export default SingleMartialArts;
