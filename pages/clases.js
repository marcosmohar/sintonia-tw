import Layout from "../components/layout";
import ClassList from "../components/class-list";

const experiencias = [
  {
    title: "Eneagrama 2",
    subtitle:
      "Continua profundizando el estudio del Eneagrama desde una visión integral y dinámica",
    courseUrl: "/eneagrama2",
    img: {
      alt: "Mano sujetando un mapa colorido",
      url: "/enneagram.jpg",
    },
  },
  {
    title: "Hambre o Ansiedad",
    subtitle: "Aprende a escuchar lo que tu cuerpo te dice.",
    courseUrl: "/hambre-o-ansiedad",
    img: {
      alt: "Mujer enfrente de refrigerador con la puerta abierta",
      url: "/fridge.jpg",
    },
  },
  {
    title: "La voz de la abundancia",
    subtitle:
      "Sanar los patrones familiares, personales y del alma que te impiden conectar con la abundancia.",
    courseUrl: "/voz-abundancia",
    img: {
      alt: "Mujer enfrente de refrigerador con la puerta abierta",
      url: "/abundancia.jpg",
    },
  },
  {
    title: "Empodera tus finanzas con conciencia",
    subtitle: "Aprende a identificar los patrones de finanzas desordenadas",
    courseUrl: "/finanzas-conciencia",
    img: {
      alt: "Foto que muestra una gráfica creciente",
      url: "/finanzas-conciencia.jpg",
    },
  },
  {
    title: "Relaciones de dependencia",
    subtitle:
      "Sanando vínculos tóxicos. Cadenas para el corazón, la mente y la acción",
    courseUrl: "/relaciones-dependencia",
    img: {
      alt: "Pareja agarrados de la mano con inseguridad",
      url: "/relaciones.jpg",
    },
  },
  {
    title: "Eneagrama",
    subtitle: "Mapa mental para el que quiere saber que pedo",
    courseUrl: "/eneagrama",
    img: {
      alt: "Persona sujetando un mapa colorido",
      url: "/mapa.jpg",
    },
  },
];

export default function Clases() {
  return (
    <Layout>
      <section className="flex flex-col items-center px-4 py-10 my-36">
        <h1 className="font-bold text-2xl uppercase">Conoce nuestras Clases</h1>
        <hr className="h-2 w-40 my-4 bg-sintogreen-500" />
        <p className="text-center md:text-left text-lg">
          Orientadas a la búsqueda del <span>bienestar personal</span>, y el
          equilibrio con el resto del mundo.{" "}
        </p>
      </section>
      <div className="text-2xl font-semibold text-center py-12 text-white bg-sintopurple-700">
        <p className="border-l-8 border-sintopurple-200 max-w-3xl mx-auto py-4">
          Aquí podrás consultar el catálogo de nuestras experiencias anteriores
        </p>
      </div>
      <ClassList experiencias={experiencias} />
      {console.log(experiencias)}
    </Layout>
  );
}
