import SingleMartialArts from "@/components/SingleMartialArt";
import { martialArtsData } from "@/data";
const MartialArts = () => {
  return (
    <div className="bg-dark">
      <div className="wrapper section-padding text-light">
        <h1 className="uppercase text-3xl font-semibold text-accent1 mb-10">
          diffarent kinds of martial arts
        </h1>
        {martialArtsData.map((martialArt) => (
          <SingleMartialArts martialArt={martialArt} key={martialArt.id} />
        ))}
      </div>
    </div>
  );
};

export default MartialArts;
