const ChargeSeccion = () => {
  return (
    <>
      <section
        className="landing-Seccion bg-black h-screen w-full text-center relative overflow-hidden"
        data-headers-color="black"
      >
        <div className="z-20 relative h-full flex flex-col">
          <header>
            <h2 className="text-black pt-24 text-4xl font-medium pb-4">
              Model Y
            </h2>
          </header>
          <footer className="flex flex-grow flex-nowrap justify-end flex-col pb-16">
            <div className="gap-x-4 flex mx-auto mb-8">
              <a
                href=""
                className="bg-gray-900 rounded font-medium px-24 py-3 text-xs text-white inline-block hover:bg-gray-700 transition-colors"
              >
                Encargar
              </a>
              <a
                href=""
                className=" bg-white text-black rounded font-medium px-16 py-3 text-xs inline-block hover:bg-gray-300  transition-colors"
              >
                Prueba de conducción
              </a>
            </div>
            <div>
              <a href="" className="text-xs underline">
                Disponible con Moves III
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 z-10 h-full w-full">
          <img
            alt=""
            className="object-center object-cover h-full w-full"
            src="../public/Model-Y.avif"
          />
        </div>
      </section>
    </>
  );
};
export default ChargeSeccion;
