import Layout from "../../components/layout";
import Head from "next/head";

import { initiateCheckout } from "../../lib/payments";

export default function Transgeneracional() {
  return (
    <Layout>
      <Head>
        <title>Curso Transgeneracional</title>
        <meta
          name="description"
          content="Curso Transgeneracional: Descubre la influencia que tienen los programas que heredaste de tus ancestros y actualízalos"
        />
      </Head>
      <div className="mb-14">
        <div className="bg-sintopurple-100 relative">
          <svg
            className="absolute inset-0 h-full max-w-full hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            preserveAspectRatio="xMaxYMax"
            viewBox="0 0 1440 560"
          >
            <g clipPath='url("#SvgjsClipPath1002")' fill="none">
              <rect
                width="1440"
                height="560"
                x="0"
                y="0"
                fill="rgba(166, 156, 188, 1)"
              ></rect>
              <circle
                r="93.335"
                cx="-16.02"
                cy="74.07"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="93.335"
                cx="440.1"
                cy="321.33"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="93.335"
                cx="679.64"
                cy="806.24"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="100.29"
                cx="390.84"
                cy="251.68"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="110.565"
                cx="656.54"
                cy="511.65"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="126.005"
                cx="313.18"
                cy="498.17"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="154.39"
                cx="856.33"
                cy="181.89"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="123.48"
                cx="606.32"
                cy="101.49"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="96.72"
                cx="1155.33"
                cy="0.92"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="175.415"
                cx="459.53"
                cy="216.34"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="141.595"
                cx="494.17"
                cy="110.63"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="69.54"
                cx="905.86"
                cy="177.17"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="155.95"
                cx="950.06"
                cy="229.57"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="145.19"
                cx="148.35"
                cy="274.23"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="109.815"
                cx="729.07"
                cy="101.93"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="164.595"
                cx="1280.49"
                cy="115.89"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="79.155"
                cx="1230.34"
                cy="530.36"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="66.16"
                cx="1077.07"
                cy="252.32"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="150.32"
                cx="79.15"
                cy="110.07"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="112.125"
                cx="1388.91"
                cy="464.84"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="185.46"
                cx="1385.43"
                cy="462.83"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="83.225"
                cx="982.41"
                cy="34.37"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="121.605"
                cx="1076.04"
                cy="24.39"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="143.91"
                cx="582.16"
                cy="293.57"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="136.84"
                cx="1115.65"
                cy="442.1"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="140.005"
                cx="947.86"
                cy="121.74"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="103.315"
                cx="1126.59"
                cy="119.78"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="153.81"
                cx="467.18"
                cy="272.39"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="144.745"
                cx="420.98"
                cy="12.65"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="141.75"
                cx="1258.66"
                cy="286.09"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="93.06"
                cx="1431.79"
                cy="84.39"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="125"
                cx="131.3"
                cy="532.14"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="89.16"
                cx="523.74"
                cy="12.82"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="164.875"
                cx="239.52"
                cy="385.39"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="97.485"
                cx="886.16"
                cy="209.64"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="178.54"
                cx="502.6"
                cy="479.09"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="56.98"
                cx="961.96"
                cy="40.48"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="107.5"
                cx="710.07"
                cy="134.63"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="84.31"
                cx="1007.91"
                cy="114.57"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
              <circle
                r="140.63"
                cx="252.99"
                cy="311.13"
                stroke="#4c3879"
                strokeOpacity="0.15"
                strokeWidth="2"
              ></circle>
            </g>
            <defs>
              <clipPath id="SvgjsClipPath1002">
                <rect width="1440" height="560" x="0" y="0"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 relative">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <img
                src="/transgeneracional.jpg"
                alt=""
                className="rounded-lg mb-6  shadow-2xl"
              />
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-sintogreen-700 uppercase rounded-full bg-sintogreen-50">
                  Curso nuevo
                </p>
              </div>
              <h2 className="max-w-lg mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-sintogreen-200 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Transgeneracional</span>
                </span>{" "}
                <br />
              </h2>
              <p className="font-medium text-xl leading-5 mb-6 max-w-prose">
                Descubre la influencia que tienen los programas que heredaste de
                tus ancestros y actualízalos
              </p>
              <div className="mx-auto flex flex-col md:flex-row items-center max-w-md justify-between bg-sintopurple-500 shadow-lg relative py-4 md:py-0 md:rounded-full md:pr-2">
                <img
                  className="w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                  src="/especialistas/IvanaLF.jpeg"
                  alt=""
                />
                <div className="flex flex-1 flex-col text-left">
                  <h3 className="pl-6 text-sm font-semibold leading-5 text-sintogreen-200 sm:text-base">
                    Ivana López Frascari
                  </h3>
                  <div className="relative pl-6">
                    <p className="mt-2 text-sm text-white">
                      Terapeuta holística, bioneuroemoción®, nueva medicina
                      germánica y más
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center sm:justify-center">
              <button
                onClick={() => {
                  initiateCheckout({
                    lineItems: [
                      { price: "price_1KRSYmEKELawa4HGoLaJDBAT", quantity: 1 },
                    ],
                  });
                }}
                type="submit"
                className="uppercase inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sintogreen-600 hover:bg-sintogreen-700 focus:shadow-outline focus:outline-none hover:scale-105 hover:-translate-y-1"
              >
                Inscribete Ahora
              </button>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0 pt-10">
          <div className="absolute inset-0 bg-sintopurple-600 h-32" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-6 h-6 text-sintopurple-700"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">$1000</p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                2 Masterclass <br />
                <span className="text-sm font-normal">(2hr cada una)</span>
              </p>
            </div>
            <div className="inline-block p-8 text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-6 h-6 text-sintopurple-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <p className="font-bold tracking-wide text-gray-800">
                24 de febrero
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-2xl mx-auto mb-10 px-2">
        <h2 className=" mb-10 font-sans text-2xl lg:text-3xl font-bold leading-none tracking-tight text-gray-900  md:mx-auto">
          Qué es Transgeneracional?
        </h2>
        <p className="mb-4 text-base">
          Reconoceremos los patrones familiares repetitivos que no te pertenecen
          y que influyen en tu vida día a día para poder desactivarlos.
        </p>
        <p className="mb-4 text-base">
          Descubriremos la repetición de conductas heredadas y las haremos
          conscientes: Sin saberlo, estamos sujetos a información atesorada en
          nuestro cerebro inconsciente, que nos ha servido y sirve como
          mecanismo de supervivencia, pero cuando esos mecanismos guardados como
          programas empiezan a generar conflictos, es hora de actualizarlos.
        </p>
        <p className="mb-4 text-base">
          Una vez conscientes automáticamente se actualizan logrando transformar
          situaciones conflictivas (como enfermedades, problemas de relación,
          conflictos emocionales, etc) en estados más armónicos y equilibrados.
          Te invito a esta posibilidad de transformar la percepción errónea de
          tu realidad cotidiana.
        </p>
      </section>
      <section className="max-w-2xl mx-auto mb-20 px-2 pb-10">
        <div className="mb-10">
          <h2 className=" mb-4 font-sans text-2xl lg:text-3xl font-bold leading-none tracking-tight text-gray-900  md:mx-auto">
            ¿Qué necesito para tomar la clase?
          </h2>
          <p className="text-base mb-4">
            Cualquier medio donde quieras tomar apuntes
          </p>
        </div>
        <div className="mb-10">
          <h2 className=" mb-4 font-sans text-2xl lg:text-3xl font-bold leading-none tracking-tight text-gray-900  md:mx-auto">
            A quién va dirigida esta clase
          </h2>
          <p className="text-base mb-4">
            Para todos aquellos que quieran reconocer patrones heredados y
            transformar situaciones conflictivas (como enfermedades, problemas
            de relación, conflictos emocionales, etc) en estados más armónicos y
            equilibrados.
          </p>
        </div>
        <div className="flex items-center sm:justify-center">
          <button
            type="submit"
            className="uppercase inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sintogreen-600 hover:bg-sintogreen-700 focus:shadow-outline focus:outline-none hover:scale-105 hover:-translate-y-1"
          >
            Inscribete Ahora
          </button>
        </div>
      </section>
    </Layout>
  );
}
