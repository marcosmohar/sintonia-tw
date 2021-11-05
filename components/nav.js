import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  return (
    <nav className="bg-white w-full py-2 mx-auto px-8 shadow fixed z-50 top-0 ">
      <div className="flex items-center justify-between flex-wrap max-w-screen-xl mx-auto">
        <div className="flex items-center flex-shrink-0 text-white mr-6 ">
          <Link href="/">
            <a className="flex no-underline hover:no-underline pl-2">
              <img src="/nav-logo.svg" className="h-12" alt="" />
            </a>
          </Link>
        </div>

        <div className="lg:hidden flex items-center bg-white">
          <button
            htmlFor="menu-toggle"
            id="nav-toggle"
            className="focus:outline-none"
            data-target="#navigation"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              xmlns="http://www.w3.org/2000/svg"
              fill="#8068ae"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </button>
          <input type="checkbox" className="hidden" id="menu-toggle" />
        </div>

        <div
          className={
            "w-full flex-grow lg:items-end lg:w-auto lg:block pt-6 lg:pt-0" +
            (navbarOpen ? "block" : " hidden")
          }
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li
              className={
                "px-2 rounded hover:bg-purple-100" +
                (router.pathname == "/"
                  ? " text-sintopurple-400"
                  : " text-gray-600")
              }
            >
              <Link href="/">
                <a className="inline-block no-underline hover:text-underline py-2 px-4">
                  <div className="w-auto block mx-auto rounded-sm">Inicio</div>
                </a>
              </Link>
            </li>
            <li
              className={
                "px-3 rounded hover:bg-purple-100" +
                (router.pathname == "/clases"
                  ? " text-sintopurple-400"
                  : " text-gray-600")
              }
            >
              <Link href="/clases">
                <a className="inline-block no-underline hover:text-underline py-2 px-4">
                  <div className="w-auto block mx-auto rounded-sm">
                    Clases y Sesiones
                  </div>
                </a>
              </Link>
            </li>
            <li
              className={
                "px-3 rounded hover:bg-purple-100" +
                (router.pathname == "/especialistas"
                  ? " text-sintopurple-400"
                  : " text-gray-600")
              }
            >
              <Link href="/especialistas">
                <a className="inline-block no-underline hover:text-underline py-2 px-4">
                  <div className="w-auto block mx-auto rounded-sm">
                    Especialistas
                  </div>
                </a>
              </Link>
            </li>
            <li
              className={
                "px-3 rounded hover:bg-purple-100" +
                (router.pathname == "/nosotros"
                  ? " text-sintopurple-400"
                  : " text-gray-600")
              }
            >
              <Link href="/nosotros">
                <a className="inline-block no-underline hover:text-underline py-2 px-4">
                  <div className="w-auto block mx-auto rounded-sm">
                    Nosotros
                  </div>
                </a>
              </Link>
            </li>
            <li
              className={
                "px-3 rounded-3xl  text-white hover:bg-green-700 " +
                (router.pathname == "/organizacional"
                  ? "bg-green-800"
                  : "bg-green-600")
              }
            >
              <Link href="/organizacional">
                <a className="inline-block no-underline hover:text-underline py-2 px-4">
                  <div className="w-auto block mx-auto rounded-sm">
                    Organizacional
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
