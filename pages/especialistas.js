import Layout from "../components/layout";
import EspecialistTeam from "../components/especialistTeam";

const personas = [
  {
    nombre: "Alejandra Guzman",
    titulo: "Fitness coach y nutrición",
    especialidad:
      "Acreditada como entrenador físico-deportivo especialista en fisioculturismo y nutrición deportiva ",
    url: "/especialistas/AleGuzman.jpg",
  },
  {
    nombre: "Lorenza Remus",
    titulo: "Consultora académica y Coach",
    especialidad:
      "Maestra de Yoga, meditación, baile y ballet clasico. Constructora de ambientes de aprendizaje",
    url: "/especialistas/LorenzaRemus.jpg",
  },
  {
    nombre: "Alejandro Villalba",
    titulo: "Maestro de música, docente y sanador con sonido",
    especialidad: "Sound breathwork, yoga de la voz, ceremonias de sonido",
    url: "/especialistas/AlejandroVillalba.jpg",
  },
  {
    nombre: "Genoveva Álvarez",
    titulo: "Psicoterapeuta humanista",
    especialidad:
      "Psicología de los eneatipos, docente, formadora en desarrollo humano",
    url: "/especialistas/VevaAlvarez.jpg",
  },
  {
    nombre: "Mariana Canto",
    titulo: "Especialista en seguros y finanzas personales",
    especialidad: "Talleres de finanzas, educación financiera en empresas",
    url: "/especialistas/MarianaCanto.jpg",
  },
  {
    nombre: "Karla Lara",
    titulo: "Desarrollo personal y CEO de Neurofitness",
    especialidad:
      "Master & Coach en Programación Neurolingüística. Especialista en inteligencia emocional.",
    url: "/especialistas/KarlaLara.jpg",
  },
  {
    nombre: "Allan Vazquez",
    titulo: "Mercadólogo, conferencista de creatividad",
    especialidad:
      "Estrategias de comunicación digital, medios sociales, marketing B2B y B2C",
    url: "/especialistas/AllanVazquez.jpg",
  },
  {
    nombre: "Patricia Beatriz Rodriguez Guerra",
    titulo: "Programación Neurolingüística y desarrollo personal",
    especialidad: "Consultora en temas de desarrollo humano en empresas",
    url: "/especialistas/PatyRG.jpg",
  },
];

export default function Especialistas() {
  return (
    <Layout>
      <h1 className="text-white ">Especialistas</h1>
      <section id="team">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-green-700 uppercase rounded-full bg-green-50">
                especialistas
              </p>
            </div>
            <h2 className="max-w-lg mb-20 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-900 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
              </span>
              Conoce a nuestro equipo de especialistas
            </h2>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <EspecialistTeam especialistas={personas} />
            {console.log(personas)}
          </div>
        </div>
      </section>
    </Layout>
  );
}
