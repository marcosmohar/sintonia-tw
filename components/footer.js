import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sintopurple-700 text-white w-full sticky bottom-0 left-0 z-0">
      <div className="container max-w-7xl mx-auto md:px-4 border-box flex flex-col">
        <div className="md:flex md:mt-16 flex-wrap justify-around mb-4 py-12 text-center md:text-left">
          <div className="md:w-1/2 lg:w-1/4 h-auto mt-5 mb-6 md:mt-0">
            <img src="logo-blanco-transparente.png" alt="" className="h-40" />
          </div>
          <div className="md:w-1/2 lg:w-1/4 h-auto mt-5 mb-6 md:mt-0">
            <div className="text-purple-300 font-semibold mb-2">Clases</div>
            <ul className="list-reset leading-normal">
              <li className="hover:text-purple-200 text-sm text-purple-100">
                <Link href="/clases/finanzas">
                  <a>Empodera tus Finanzas</a>
                </Link>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100">
                <Link href="/clases/relaciones-dependencia">
                  <a>Relaciones de dependencia</a>
                </Link>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100">
                <Link href="/clases/eneagrama2">
                  <a>Eneagrama 2</a>
                </Link>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100">
                <Link href="/clases/voz-abundancia">
                  <a>La voz de la abundancia</a>
                </Link>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100">
                <Link href="/clases/eneagrama">
                  <a>Eneagrama</a>
                </Link>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100">
                <Link href="/clases/hambre-o-ansiedad">
                  <a>¿Hambre o Ansiedad?</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 lg:w-1/4 h-auto mt-5 mb-6 md:mt-0">
            <h3 className="text-purple-300 mb-2 font-semibold">Contáctanos</h3>
            <ul className="list-reset leading-normal">
              <li className="hover:text-purple-200 text-sm text-purple-100 ">
                <a
                  href="https://www.facebook.com/sintoniasoy"
                  className="flex items-center"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-facebook mr-2"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </a>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100 ">
                <a
                  href="https://www.instagram.com/sintoniasoy/"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-instagram mr-2"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100 ">
                <a
                  href="https://www.linkedin.com/company/sintonía/"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin mr-2"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li className="hover:text-purple-200 text-sm text-purple-100">
                <a
                  href="mailto:contacto@sintonia.soy"
                  className="flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail mr-2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  Correo
                </a>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 lg:w-1/4 h-auto mt-5 mb-6 md:mt-0">
            <h3 className="text-purple-300 mb-2 font-semibold">
              Nuestro Newsletter
            </h3>
            <p className="hover:text-purple-200 text-sm text-purple-100 leading-normal">
              Entérate de nuestras nuevas clases
            </p>
            <div className="mt-2 w-64 mx-auto lg:mx-0">
              <input
                type="text"
                className="w-full py-3 px-4 rounded text-grey-dark text-sm h-auto"
                placeholder="usuario@dominio.com"
              />
              <button className="w-full bg-green-700 mt-1 uppercase text-green-100 rounded h-auto text-xs p-3">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center text-center text-xs md:text-sm pb-4">
        <Link href="/privacidad">
          <a>Aviso de Privacidad </a>
        </Link>
        <span className="mx-4"> | </span>
        <Link href="/terminos">
          <a> Terminos y Condiciones</a>
        </Link>
        <span className="mx-4"> | </span>© 2020 SintoniaSoy, Todos los Derechos
        Reservados
      </div>
    </footer>
  );
}
