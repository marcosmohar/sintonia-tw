export default function Hero() {
  return (
    <section className="body-font min-h-screen flex content-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font text-4xl lg:text-7xl  mb-4 text-white font-bold">
            Experiencias de
            <br className="hidden lg:inline-block" />
            bienestar y felicidad
          </h1>
          <p className="mb-8 leading-relaxed max-w-char">
            Cursos, talleres y experiencas únicas ONLINE Y EN VIVO enfocadas en
            proporcionar herramientas para que trabajes en tu persona.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-sintopurple-600 bg-white border-0 py-2 px-12 transition focus:outline-none hover:bg-sintopurple-300 hover:text-white rounded text-lg">
              Personas
            </button>
            <button className="ml-8 inline-flex text-white bg-green-700 border-0 py-2 px-12 focus:outline-none hover:bg-green-800 rounded text-lg">
              Empresas
            </button>
          </div>
        </div>
        <div className=" w-5/6 lg:max-w-lg">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/hero-image.webp"
          />
        </div>
      </div>
    </section>
  );
}
