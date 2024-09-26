/* eslint-disable react/prop-types */
const SectionCard = ({
  imgd,
  imgm,
  titulo,
  textwhite01,
  textwhite02,
  mostrar,
}) => {
  return (
    <>
      <section className="h-screen w-full relative">
        <div className="z-20 relative flex flex-col text-center h-full">
          <header>
            <h2
              className={`text-[25px] font-medium pt-24 tracking-tight ${textwhite01} md:text-4xl md:pt-44 lg:pt-24`}
            >
              {titulo}
            </h2>
          </header>
          <footer
            className={`flex flex-col flex-grow flex-nowrap justify-end gap-3 px-6 ${
              mostrar ? `pb-14 md:pb-20 lg:pb-16` : `pb-20 md:pb-28 lg:pb-24`
            } `}
          >
            <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-6">
              <a
                href="#"
                className="bg-neutral-800 text-white rounded px-24 py-3 text-xs font-medium hover:bg-neutral-600 transition-colors"
              >
                Encargar
              </a>
              <a
                href="#"
                className="bg-white rounded px-20 py-3 text-xs font-medium hover:bg-neutral-300 transition-colors md:px-16"
              >
                Prueba de Conducción
              </a>
            </div>
            {mostrar && (
              <div className="lg:pt-4">
                <a href="#" className={`text-[11px] underline ${textwhite02}`}>
                  Disponible con Moves!!!
                </a>
              </div>
            )}
          </footer>
        </div>
        <div className="absolute h-full w-full top-0 bottom-0 z-10">
          <picture className="">
            <source srcSet={imgd} media="(min-width:1024px)"></source>
            <img
              src={imgm}
              alt="Cards"
              className="object-center-60 object-cover h-full w-full"
            />
          </picture>
        </div>
      </section>
    </>
  );
};
export default SectionCard;
