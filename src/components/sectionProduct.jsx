/* eslint-disable react/prop-types */
const SectionProduct = ({ imgd, imgm, titulo, mostrar, text01 }) => {
  return (
    <>
      <section className="h-screen w-full relative">
        <div className="z-20 relative flex flex-col text-center h-full">
          <header>
            <h2
              className={`text-[25px] font-medium pt-24 tracking-tight md:text-4xl md:pt-44 lg:pt-24`}
            >
              {titulo}
            </h2>
            {mostrar && (
              <p className="text-xs text-slate-700 pt-1 lg:pt-4">
                Energía para todos
              </p>
            )}
          </header>
          <footer
            className={`flex flex-col flex-grow flex-nowrap justify-end gap-3 px-6 pb-16 md:pb-28 lg:pb-32`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-6">
              <a
                href="#"
                className={`rounded px-24 py-3 text-xs font-medium  transition-colors ${
                  mostrar
                    ? `bg-neutral-800 text-white hover:bg-neutral-600`
                    : `bg-white hover:bg-neutral-300`
                }`}
              >
                {text01}
              </a>
            </div>
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
export default SectionProduct;
