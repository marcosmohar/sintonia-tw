import Layout from "../../components/layout";

export default function Eneagrama() {
  return (
    <Layout>
      <div className="mb-16">
        <div className="bg-sintopurple-100">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-sintogreen-700 uppercase rounded-full bg-sintogreen-50">
                  Curso
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
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
                  <span className="relative">Eneagrama</span>
                </span>{" "}
                <br />
                <span className="font-medium text-2xl">
                  Un mapa para el autoconocimiento y el desarrollo personal
                </span>
              </h2>
              <p className="text-base text-sintopurple-700 md:text-lg font-medium">
                Especialista:{" "}
                <span className="font-semibold text-white">
                  Genoveva Alvarez
                </span>
              </p>
            </div>
            <div className="flex items-center sm:justify-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sintogreen-600 hover:bg-sintogreen-400 focus:shadow-outline focus:outline-none"
              >
                Inscribete Ahora
              </button>
            </div>
          </div>
        </div>
        <div className="relative px-4 sm:px-0">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
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
              <p className="font-bold tracking-wide text-gray-800">$2,200</p>
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
                12 sesiones
              </p>
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
                20 de octubre
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-2xl mx-auto mb-10">
        <h2 className=" mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  md:mx-auto">
          Qué es el Eneagrama?
        </h2>
        <p className="mb-4 text-base">
          El Eneagrama es un mapa relativamente sencillo, pero muy profundo y
          poderoso, que nos permite emprender de manera clara el camino del
          autoconocimiento y el desarrollo personal a través del descubrimiento
          del modelo mental con el que funcionamos.
        </p>
        <p className="mb-4 text-base">
          En cada sesión del curso estaré compartiendo en qué consiste, cómo
          funciona y cuál es la dinámica interna de cada eneatipo y dando
          ejemplos de la vida cotidiana que servirán para clarificar y aterrizar
          el aprendizaje.
        </p>
      </section>
      <section className="max-w-2xl mx-auto mb-20">
        <div className="mb-10">
          <h2 className=" mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  md:mx-auto">
            Objetivos
          </h2>
          <ul className="list-disc space-y-2">
            <li>
              Conocer el mapa y la dinámica del Eneagrama como herramienta de
              autoconocimiento.
            </li>
            <li>
              Identificar las características de los nueve tipos de
              personalidad.
            </li>
            <li>
              Reconocer el propio eneatipo para ampliar su autopercepción y
              descubrir las pautas recurrentes que limitan la expresión de su
              potencial.
            </li>
            <li>
              Asumir la responsabilidad del crecimiento como una tarea personal.
            </li>
            <li>Mejorar las relaciones intrapersonales e interpersonales.</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className=" mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  md:mx-auto">
            ¿Qué necesito para tomar la clase?
          </h2>
          <p className="text-base mb-4">
            No es necesario contar con ningún material específico. Sin embargo,
            de forma opcional se sugiere cuaderno y pluma para tomar notas y
            situarse en un espacio cómodo y en silencio, para poder escuchar lo
            que se compartirá.
          </p>
        </div>
        <div className="mb-10">
          <h2 className=" mb-4 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900  md:mx-auto">
            A quién va dirigida esta clase
          </h2>
          <p className="text-base mb-4">
            Está dirigido a todas las personas que quieran crecer y
            desarrollarse como la mejor versión de sí mismas.
          </p>
        </div>
        <div className="flex items-center sm:justify-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sintogreen-600 hover:bg-sintogreen-400 focus:shadow-outline focus:outline-none"
          >
            Inscribete Ahora
          </button>
        </div>
      </section>
    </Layout>
  );
}
