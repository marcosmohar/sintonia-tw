import Head from "next/head";
import Nav from "../components/nav";
import Hero from "../components/hero";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 font-poppin">
      <Head>
        <title>Sintonia.Soy | Lo que buscas cuando te buscas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="bg-sintopurple-500 w-full text-white">
        <Hero />
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center lg:my-40 ">
          <section className="min-h-screen flex content-center ">
            <div className="max-w-screen-xl p-4 bg-transparent dark:bg-gray-800 mx-auto px-4 sm:px-6 lg:px-8 relative py-26 lg:mt-20">
              <div className="relative">
                <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                  <div className="lg:col-start-2 lg:max-w-2xl ml-auto">
                    <p className="text-base leading-6 text-sintopurple-100 font-semibold uppercase">
                      Interactive
                    </p>
                    <h4 className="mt-2 text-2xl leading-8 font-extrabold text-green-300 dark:text-white sm:text-3xl sm:leading-9">
                      Interactivity between team members is the key of the
                      success.
                    </h4>
                    <p className="mt-4 text-lg leading-6 text-gray-100 dark:text-gray-300">
                      Diseñamos experiencias de Bienestar y Felicidad. Enfocados
                      en los 4 ejes que Sintonía sigue para determinar
                      bienestar.
                    </p>
                    <p className="flex justify-center mt-8">
                      <img className="w-full px-8" src="/ejes.svg" alt="" />
                    </p>
                  </div>
                  <div className="mt-10 lg:-mx-4 relative relative-20 lg:mt-0 lg:col-start-1">
                    <div className="relative space-y-4">
                      <div className="flex items-end justify-center lg:justify-start space-x-4">
                        <figure className="relative">
                          <img
                            className="rounded-lg shadow-lg w-32 md:w-56 filter brightness-75"
                            width="200"
                            src="/fridge-portrait.jpg"
                            alt="1"
                          />
                          <figcaption className="absolute bottom-1 left-4 text-purple-100 shadow">
                            ¿Hambre o ansiedad?
                          </figcaption>
                        </figure>
                        <figure className="relative">
                          <img
                            className="rounded-lg shadow-lg w-40 md:w-64"
                            width="260"
                            src="/enneagram.jpg"
                            alt="2"
                          />
                          <figcaption className="absolute bottom-1 left-4 text-white">
                            Eneagrama
                          </figcaption>
                        </figure>
                      </div>
                      <div className="flex items-start justify-center lg:justify-start space-x-4 ml-12">
                        <figure className="relative">
                          <img
                            className="rounded-lg shadow-lg w-24 md:w-40"
                            width="170"
                            src="/magia.jpg"
                            alt="3"
                          />
                          <figcaption className=" absolute bottom-1 left-4 text-white">
                            Magicamente
                          </figcaption>
                        </figure>
                        <figure className="relative">
                          <img
                            className="rounded-lg shadow-lg w-32 md:w-56"
                            width="200"
                            src="/growing-coins-portrait.jpg"
                            alt="4"
                          />
                          <figcaption className=" absolute bottom-1 left-4 text-sintopurple-800">
                            Finanzas saludables
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
