import ChargeSeccion from "../components/chargeSeccion";
import HeroSeccion from "../components/heroSeccion";
import Navbar from "../components/navbar";

const Tesla = () => {
  return (
    <>
      <Navbar />
      <main className="snap-y snap-mandatory relative w-full h-screen overflow-auto">
        <div className="snap-center">
          <ChargeSeccion />
        </div>
        <div className="snap-center">
          <HeroSeccion />
        </div>
      </main>
    </>
  );
};
export default Tesla;
