const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-950 w-full z-40 text-white py-5">
        <div>
          <ul className="flex flex-col items-center justify-center gap-x-4 [&>li>a]:text-[10px] font-medium lg:flex-row">
            <li>
              <a href="#">Tesla © 2024</a>
            </li>
            <li>
              <a href="#">Privacidad y legal</a>
            </li>
            <li className="hidden sm:block">
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Noticias</a>
            </li>
            <li className="hidden sm:block">
              <a href="#">Seguir informado</a>
            </li>
            <li className="hidden sm:block">
              <a href="#">Localización de tiendas</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};
export default Footer;
