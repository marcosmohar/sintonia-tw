import Head from "next/head";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer";
import Layout from "../components/layout";
import Paquetes from "../components/paquetes";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Sintonia.Soy | Lo que buscas cuando te buscas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="bg-sintopurple-500 w-full text-white z-10">
        <Hero />
        <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center lg:my-40 ">
          <section className="mb-40 mt-10">
            <div className="container max-w-2xl mx-auto">
              <h2 className="max-w-xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-green-200 sm:text-4xl md:mx-auto lg:text-5xl">
                Cursos disponibles
              </h2>
              <a href="/clases/transgeneracional">
                <img
                  src="/transgeneracional-card.jpg"
                  alt=""
                  className="w-full rounded-lg shadow-lg my-10  transition-transform  hover:scale-105 hover:shadow-2xl duration-300 ease-out"
                />
              </a>
            </div>
          </section>
          <section className="min-h-full relative mb-40">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="text-base leading-6 text-sintopurple-50 font-semibold uppercase py-4">
                    Presentando
                  </p>
                </div>
                <h2 className="max-w-xl mb-6 font-sans text-2xl font-bold leading-none tracking-tight text-green-200 sm:text-4xl md:mx-auto lg:text-5xl">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="puntos"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect fill="url(#puntos)" width="52" height="24" />
                    </svg>
                  </span>{" "}
                  ¿Qué es Sintonía?
                </h2>
                <img
                  src="/rainbow-night.jpg"
                  alt=""
                  className="w-full rounded-lg shadow-lg my-10"
                />

                <p className="text-base text-white md:text-lg">
                  Sómos el puente entre especialistas de diferentes disciplinas,
                  y personas que están en constante búsqueda de las herramientas
                  y recursos para el autoconocimiento, equilibrio y bienestar
                </p>
              </div>
            </div>
          </section>
          <section className="min-h-full flex content-center mb-40 lg:my-40">
            <div className="max-w-screen-xl p-4 bg-transparent mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
              <div className="relative">
                <div className="lg:flex flex-row-reverse gap-8 lg:items-center">
                  <div className=" md:max-w-2xl ml-auto text-center">
                    <p className="text-base leading-6 text-sintopurple-50 font-semibold uppercase">
                      ¿Por qué lo hacemos?
                    </p>
                    <h4 className="mt-2 text-2xl leading-8 font-bold text-green-200 dark:text-white sm:text-3xl sm:leading-9">
                      En Sintonía creemos que las personas sanas pueden sanar al
                      mundo
                    </h4>
                    <p className="mt-12 text-lg leading-6 text-gray-100 mx-auto">
                      Por eso, diseñamos experiencias de Bienestar y Felicidad
                      enfocados en los 4 ejes que Sintonía sigue para determinar
                      bienestar.
                    </p>
                    <p className="flex justify-center mt-8">
                      <img className="w-full px-8" src="/svg/ejes.svg" alt="" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-full flex flex-col ">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl ">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-800 uppercase rounded-full bg-green-100">
                  personas
                </p>
              </div>
              <h2 className="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-green-200 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="#a69cbc"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                      width="52"
                      height="24"
                    />
                  </svg>
                </span>{" "}
                Algunos de nuestros talleres
              </h2>
            </div>
            <div className="max-w-screen-xl p-4 bg-transparent mx-auto px-4 sm:px-6 lg:px-8 relative py-10 ">
              <div className="mt-10 lg:-mx-4 relative lg:mt-0 ">
                <div className="relative space-y-4">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                    <figure className="relative flex-none">
                      <img
                        className="rounded-lg shadow-lg w-48 h-48 filter brightness-75 object-cover object-top"
                        width="200"
                        src="/fridge-portrait.jpg"
                        alt="1"
                      />
                      <figcaption className="absolute bottom-1 left-4 text-purple-100 shadow">
                        ¿Hambre o ansiedad?
                      </figcaption>
                    </figure>
                    <figure className="relative flex-none overflow-hidden">
                      <img
                        className="rounded-lg shadow-lg w-48 h-48 filter brightness-75 object-cover object-top"
                        width="200"
                        src="/enneagram.jpg"
                        alt="2"
                      />
                      <figcaption className="absolute bottom-1 left-4 text-white">
                        Eneagrama
                      </figcaption>
                    </figure>

                    <figure className="relative flex-none">
                      <img
                        className="rounded-lg shadow-lg w-48 h-48 filter brightness-75 object-cover object-top"
                        width="200"
                        src="/magia.jpg"
                        alt="3"
                      />
                      <figcaption className=" absolute bottom-1 left-4 text-white">
                        Magicamente
                      </figcaption>
                    </figure>
                    <figure className="relative flex-none">
                      <img
                        className="rounded-lg shadow-lg w-48 h-48 filter brightness-75 object-cover object-bottom"
                        width="200"
                        src="/growing-coins-portrait.jpg"
                        alt="4"
                      />
                      <figcaption className=" absolute bottom-1 left-4 text-white drop-shadow">
                        Finanzas saludables
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="min-h-screen my-20">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-800 uppercase rounded-full bg-green-100">
                    organizaciones
                  </p>
                </div>
                <h2 className="max-w-lg mb-20 font-sans text-3xl font-bold leading-none tracking-tight text-green-200 sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="#a69cbc"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span>{" "}
                  Nuestra oferta incluye talleres para tu empresa.
                </h2>
              </div>
              <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-xl lg:grid-cols-3 sm:mx-auto">
                <Paquetes></Paquetes>
              </div>

              <p className="mt-32 mb-8">
                Visita nuestra página organizacional para conocer mejor nuestra
                oferta para empresas
              </p>
              <a
                href="/organizacional"
                className="px-4 py-2 rounded-lg bg-sintogreen-500 text-white hover:bg-sintogreen-700 transition ease-out duration-200"
              >
                ver oferta organizacional
              </a>
            </div>
          </section>

          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="text-2xl font-semibold title-font mb-4 text-green-200">
                  Algunos de nuestros especialistas
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-top mb-4 top-0"
                      src="/especialistas/AlejandroVillalba.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-green-200">
                        Alejandro Villalba
                      </h2>
                      <h3 className="text-purple-50 mb-3 text-sm">
                        Sound healing, Meditación, Respiración consciente.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-top mb-4"
                      src="/especialistas/VevaAlvarez.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-green-200">
                        Genoveva Alvarez
                      </h2>
                      <h3 className="text-purple-50 mb-3 text-sm">
                        Psicoterapeuta Humanista, especialista en Eneagrama
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src="/especialistas/KarlaLara.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-green-200">
                        Karla Lara
                      </h2>
                      <h3 className="text-purple-50 mb-3 text-sm">
                        Programación Neuro-lingüística, Inteligencia emocional y
                        conferencista
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover mb-4 object-top"
                      src="/especialistas/AllanVazquez.jpg"
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg text-green-200">
                        Allan Vazquez
                      </h2>
                      <h3 className="text-gray-50 mb-3">
                        Mercadólogo, conferencista de creatividad
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-white mt-16 mb-8">
                  {" "}
                  Conoce a todos los especialistas{" "}
                </p>
                <a
                  href="/especialistas"
                  className="px-4 py-2 bg-sintogreen-500 hover:bg-sintogreen-700 text-white rounded-lg"
                >
                  Ir a Especialistas
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
