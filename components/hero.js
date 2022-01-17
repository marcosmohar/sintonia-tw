export default function Hero() {
  return (
    <section className="body-font min-h-screen flex content-center">
      <div className="container max-w-7xl mx-auto flex px-5 py-24 flex-col  md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-4xl lg:text-5xl  mb-4 text-white font-bold">
            Experiencias de
            <br className="hidden lg:inline-block" />
            <span> bienestar y felicidad</span>
          </h1>
          <p className="max-w-2xl mb-8 ">
            Cursos, talleres y experiencas únicas enfocadas en proporcionar
            herramientas para que trabajes en tu persona.
          </p>
          <div className="flex justify-center ">
            <a
              href="/"
              className="inline-flex mx-auto py-1 px-6 sm:py-2 sm:px-12 rounded text-lg text-sintopurple-600 bg-white border-0 hover:bg-sintopurple-300 hover:text-white transition duration-150 focus:outline-none  "
            >
              Personas
            </a>
            <a
              href="/organizacional"
              className="inline-flex ml-6 py-1 px-6 sm:py-2 sm:px-12 rounded text-lg sm:ml-8 text-white bg-green-700  hover:bg-green-800 transition duration-150 focus:outline-none"
            >
              Empresas
            </a>
          </div>
        </div>
        <div className=" w-5/6 lg:max-w-lg">
          <img
            className="object-cover object-center rounded drop-shadow-lg"
            alt="hero"
            src="/hero-image.webp"
          />
        </div>
      </div>
    </section>
  );
}
