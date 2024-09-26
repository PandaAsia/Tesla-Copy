import { useState } from "react";

const Headers = () => {
  const [viewMenu, setViewMenu] = useState(false);
  const [scrolly, setScrollY] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleButtoon = () => {
    if (viewMenu === false) {
      setViewMenu(true);
      document.body.style.overflow = "hidden";
    } else {
      setViewMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  const handleScroll = () => {
    const scroll = window.scrollY;
    if (scroll > 100) {
      setScrollY(true);
    } else {
      setScrollY(false);
    }

    if (scroll > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(scroll);
  };

  window.addEventListener("scroll", handleScroll);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    if (screenWidth < 1024) {
      setViewMenu(false);
      document.body.style.overflow = "auto";
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <>
      <header
        className={`fixed z-40 w-full px-6 pt-4 lg:px-12  ${
          showHeader
            ? `lg:translate-y-0 pb-2 ${
                scrolly ? "bg-white bg-opacity-90" : "bg-transparent"
              }`
            : "translate-y-[-100%]"
        } transition-all ease-in-out`}
      >
        <section className="flex flex-row justify-between lg:items-center">
          <div className="flex justify-center items-center lg:flex-1 lg:justify-start">
            <svg
              className="h-5 w-32"
              viewBox="0 0 342 35"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
              ></path>
            </svg>
          </div>
          <div
            className={`${
              viewMenu
                ? "translate-x-0 translate-y-0"
                : "translate-x-full translate-y-0"
            } bg-white fixed z-50 bottom-0 top-0 left-0 right-0 transition-transform flex flex-col gap-4 p-6 lg:translate-x-0 lg:static lg:bg-transparent lg:flex-row lg:p-0 lg:flex-[2] lg:justify-between`}
          >
            {viewMenu && (
              <div className="flex justify-end">
                <button onClick={handleButtoon} className="text-xs font-medium">
                  X
                </button>
              </div>
            )}
            <nav className="pt-6 lg:pt-0">
              <ul className="flex flex-col gap-12 text-base font-medium lg:flex-row lg:text-xs lg:gap-0 ">
                <li className="lg:hover:bg-slate-300 lg:px-4 lg:py-2 lg:rounded lg:transition-colors">
                  <a href="#">Vehículos</a>
                </li>
                <li className="lg:hover:bg-slate-300 lg:px-4 lg:py-2 lg:rounded lg:transition-colors">
                  <a href="#">Energía</a>
                </li>
                <li className="lg:hover:bg-slate-300 lg:px-4 lg:py-2 lg:rounded lg:transition-colors">
                  <a href="#">Carga</a>
                </li>
                <li className="lg:hover:bg-slate-300 lg:px-4 lg:py-2 lg:rounded lg:transition-colors">
                  <a href="#">Descubrir</a>
                </li>
                <li className="lg:hover:bg-slate-300 lg:px-4 lg:py-2 lg:rounded lg:transition-colors">
                  <a href="#">Tienda</a>
                </li>
              </ul>
            </nav>
            <div className="pt-10 text-base font-medium lg:pt-0">
              <ul className="flex flex-col gap-12 lg:flex-row lg:gap-4">
                <li className="lg:hover:bg-slate-300">
                  <a href="#">
                    {viewMenu ? (
                      <p>Soporte</p>
                    ) : (
                      <i className="bi bi-question-circle lg:text-xl"></i>
                    )}
                  </a>
                </li>
                <li className="lg:hover:bg-slate-300">
                  <a href="#" className="flex gap-4">
                    <i className="bi bi-globe text-2xl lg:text-xl"></i>
                    {viewMenu && (
                      <div>
                        <p>España</p>
                        <small className="text-slate-500">español</small>
                      </div>
                    )}
                  </a>
                </li>
                <li className="lg:hover:bg-slate-300">
                  <a href="#" className="flex gap-4">
                    <i className="bi bi-person-circle text-2xl lg:text-xl"></i>
                    {viewMenu && <p>Cuenta</p>}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={handleButtoon}
            className="text-xs rounded bg-slate-300 px-4 py-2 lg:hidden"
          >
            Menu
          </button>
        </section>
      </header>
    </>
  );
};
export default Headers;
