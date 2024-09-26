const HeroSeccion = () => {
  return (
    <>
      <section
        className="landing-Seccion bg-black h-screen w-full text-center relative overflow-hidden"
        data-headers-color="white"
      >
        <div className="z-20 relative h-full flex flex-col">
          <header>
            <h2 className="text-white pt-24 text-4xl font-medium pb-4">
              Disfrute de Tesla
            </h2>
            <p className="text-white text-xs font-medium">
              Programe una prueba de conducción hoy mismo
            </p>
          </header>
          <footer className="flex flex-grow flex-nowrap justify-end flex-col pb-36">
            <div>
              <a
                href=""
                className="border-[3px] border-white backdrop-blur-sm rounded font-medium px-16 py-2 text-xs text-white inline-block hover:bg-white hover:text-black transition-colors"
              >
                Prueba de conducción
              </a>
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 z-10 h-full w-full">
          <video
            autoPlay
            muted
            loop
            className="object-center object-cover h-full w-full"
            src="../public/video.webm"
          ></video>
        </div>
      </section>
    </>
  );
};
export default HeroSeccion;
