/* eslint-disable react/prop-types */
import DriveDesktop from "../assets/Drive-Desktop.webm";
import DriveMobile from "../assets/Drive-Mobile.webm";
const SectionVideo = () => {
  return (
    <>
      <section className="h-screen w-full relative">
        <div className="z-20 relative flex flex-col text-center h-full text-white">
          <header>
            <h2
              className={`text-[25px] font-medium pt-24 tracking-tight md:text-4xl md:pt-44 lg:pt-24`}
            >
              Disfrute de Tesla
            </h2>

            <p className="text-xs pt-1 lg:pt-4">
              Programe una prueba de conducción hoy mismo
            </p>
          </header>
          <footer
            className={`flex flex-col flex-grow flex-nowrap justify-end gap-3 px-6 pb-20 md:pb-28 lg:pb-28`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:justify-center md:gap-6">
              <a
                href="#"
                className={`rounded px-24 py-2 text-xs font-medium  transition-colors border-4`}
              >
                Prueba de conducción
              </a>
            </div>
          </footer>
        </div>
        <div className="absolute h-full w-full top-0 bottom-0 z-10">
          <video
            className="object-center object-cover h-full w-full"
            autoPlay
            loop
            muted
          >
            <source
              src={DriveDesktop}
              media="(min-width: 1024px)"
              type="video/mp4"
            />
            <source src={DriveMobile} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};
export default SectionVideo;
