import { useEffect } from "react";

const Navbar = () => {
  const $header = document.querySelector("#landing-header");
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-headers-color");
          $header.style.color = color;
        }
      });
    }, observerOptions);

    const $sections = document.querySelectorAll(".landing-Seccion");
    $sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <>
      <header
        className="py-3 px-9 flex items-center fixed top-0 w-full justify-between text-white z-40 transition-colors duration-300"
        id="landing-header"
      >
        <div className="flex flex-grow basis-0">
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
        <nav>
          <ul className="flex text-xs [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-medium">
            <li>
              <a href="">Model s</a>
            </li>
            <li>
              <a href="">Model 3</a>
            </li>
            <li>
              <a href="">Model X</a>
            </li>
            <li>
              <a href="">Model Y</a>
            </li>
            <li>
              <a href="">PowerWall</a>
            </li>
            <li>
              <a href="">Carga</a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-grow justify-end basis-0">
          <ul className="flex text-xs [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:font-medium">
            <li>
              <a href="">Soporte</a>
            </li>
            <li>
              <a href="">Cuenta</a>
            </li>
            <li>
              <a href="">Tienda</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
