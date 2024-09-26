import SectionCard from "../components/sectionCard";

import SectionProduct from "../components/sectionProduct";
import SectionVideo from "../components/seccionVideo";
import Footer from "../components/fooder";
import Headers from "../components/headers";

import ModelYDesktop from "../assets/Model-Y-Desktop.avif";
import ModelYMobile from "../assets/Model-Y-Mobile.avif";
import Model3Desktop from "../assets/Model-3-Desktop.avif";
import Model3Mobile from "../assets/Model-3-Mobile.avif";
import ModelSDesktop from "../assets/Model-S-Desktop.avif";
import ModelSMobile from "../assets/Model-S-Mobile.avif";
import ModelXDesktop from "../assets/Model-X-Desktop.avif";
import ModelXMobile from "../assets/Model-X-Mobile.avif";
import SolarPanelsDesktop from "../assets/SolarPanels-Desktop.avif";
import SolarPanelsMobile from "../assets/SolarPanels-Mobile.avif";
import AccessoriesDesktop from "../assets/Accessories-Desktop.avif";
import AccessoriesMobile from "../assets/Accessories-Mobile.avif";

const Tesla02 = () => {
  return (
    <>
      <Headers />
      <main className="snap-y snap-mandatory w-full h-screen">
        <div className="snap-center">
          <SectionCard
            imgd={ModelYDesktop}
            imgm={ModelYMobile}
            titulo={`Model Y`}
            mostrar={true}
          />
        </div>
        <div className="snap-center">
          <SectionCard
            imgd={Model3Desktop}
            imgm={Model3Mobile}
            titulo={`Model 3`}
            textwhite02={`text-white`}
            mostrar={true}
          />
        </div>
        <div className="snap-center">
          <SectionCard
            imgd={ModelSDesktop}
            imgm={ModelSMobile}
            titulo={`Model S`}
            textwhite01={`text-white`}
          />
        </div>
        <div className="snap-center">
          <SectionCard
            imgd={ModelXDesktop}
            imgm={ModelXMobile}
            titulo={`Model X`}
          />
        </div>
        <div className="snap-center">
          <SectionVideo />
        </div>
        <div className="snap-center">
          <SectionProduct
            imgd={SolarPanelsDesktop}
            imgm={SolarPanelsMobile}
            titulo={`Solar y Powerwall`}
            text01={`Saber más`}
            mostrar={true}
          />
        </div>
        <div className="snap-center">
          <SectionProduct
            imgd={AccessoriesDesktop}
            imgm={AccessoriesMobile}
            titulo={"Accesorios"}
            text01={`Comprar ahora`}
          />
        </div>
        <div className="snap-center">
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Tesla02;
