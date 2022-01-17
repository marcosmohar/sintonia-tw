import Layout from "../components/layout";

export default function Nosotros() {
  return (
    <Layout>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-sintopurple-900 uppercase rounded-full bg-sintopurple-50">
              lo que buscas cuando te buscas
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-green-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">¿Quienes</span>
            </span>{" "}
            somos?
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Conoce de dónde y para qué surge Sintonía
          </p>
        </div>
        <div className="mx-auto lg:max-w-2xl">
          <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
              src="/cherryblossom.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <section className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="p-8 rounded shadow-xl sm:p-16 bg-white ">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-sintopurple-700 sm:text-4xl sm:leading-none">
                  ¿QUÉ ES SINTONIA?
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="mb-4 text-base text-gray-700">
                  Es una plataforma que reúne especialistas de diferentes
                  disciplinas para quienes están en constante búsqueda de
                  herramientas y recursos para el autoconocimiento, equilibrio y
                  bienestar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white pt-6 sm:pt-8 lg:pt-12">
        <div className="max-w-screen-2xl px-4 md:px-8 pb-4 mx-auto">
          <div className="flex flex-wrap sm:flex-nowrap sm:justify-center sm:items-center bg-sintogreen-500 rounded-lg shadow-lg relative sm:gap-3 px-4 sm:pr-8 ms:px-8 py-3">
            <div className="sm:w-auto max-w-screen-sm inline-block text-white  text-center md:text-lg mb-2 sm:mb-0">
              “Buscamos generar comunidad siendo un puente entre especialistas y
              personas con intereses en sintonía, creando así un espacio
              comprometido con el desarrollo personal y la evolución constante.”
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="p-8 rounded shadow-xl sm:p-16 bg-white ">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="uppercase font-sans text-3xl font-bold tracking-tight text-sintopurple-700 sm:text-4xl sm:leading-none">
                  ¿Cómo surge?
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="mb-4 text-base text-gray-700">
                  De la necesidad de generar un espacio para facilitar el
                  acercamiento entre los{" "}
                  <span className="text-sintogreen-500 font-semibold">
                    ESPECIALISTAS
                  </span>{" "}
                  que quieren compartir su conocimiento y las{" "}
                  <span className="text-sintopurple-500 font-semibold">
                    PERSONAS
                  </span>{" "}
                  que buscan una vida más plena y sana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Nuestro Equipo
        </h2>
        <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
          <div className="relative mx-auto max-w-7xl">
            <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover object-top w-full h-60"
                    src="/socios/mariana.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <a className="block mt-2">
                      <p className="text-xl font-semibold text-neutral-600">
                        {" "}
                        Mariana Rodríguez del Real{" "}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {" "}
                        Estoy comprometida con impulsar los resultados de
                        negocio a través de estrategias más humanas
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Comunicóloga con más de 12 añosde experiencia
                        desarrollandoestrategias organizacionales de: Cultura,
                        transformaciónorganizacional, comunicacióninterna,
                        gestión de cambio,desarrollo organizacional y
                        engagement.
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        <span className="text-sintogreen-500 font-semibold">
                          ¿Mi misión?:
                        </span>{" "}
                        Inspirar a las organizaciones y alas personas a alcanzar
                        sumáximo potencial
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover object-top w-full h-60"
                    src="/socios/marien.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <a
                      href="https://twitter.com/g_perales"
                      className="block mt-2"
                    >
                      <p className="text-xl font-semibold text-neutral-600">
                        {" "}
                        Marien Ferré Berjón{" "}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Mi compromiso es acercar herramientas y recursos para
                        todos, impulsando así otra forma de estar en la vida,
                        más completa y plena
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        Comunicóloga apasionada por conectar a las personas,
                        creando experiencias diferentes que generen comunidad e
                        impulsen a sus miembros a sentirse bien, generar
                        conexiones significativas y lograr ser su mejor versión
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        <span className="text-sintogreen-500 font-semibold">
                          ¿Mi misión?:
                        </span>{" "}
                        Conectar a expertos de diferentes disciplinas con
                        personas que busquen transformar su vida por una más
                        sana y feliz
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img
                    className="object-cover w-full h-60"
                    src="/socios/marcos.jpg"
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <a href="#" className="block mt-2">
                      <p className="text-xl font-semibold text-neutral-600">
                        {" "}
                        Marcos Mohar Fresán{" "}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint harum rerum voluptatem quo recusandae magni placeat
                        saepe molestiae, sed excepturi cumque corporis
                        perferendis hic.{" "}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
