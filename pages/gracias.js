import Layout from "../components/layout";
import { useRouter } from "next/router";
import Link from "next/link";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default function Gracias() {
  const router = useRouter();
  const { session_id } = router.query;
  console.log(session_id);

  return (
    <Layout>
      <div className="container mx-auto max-w-lg text-center px-3 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-xl text-sintogreen-500 font-semibold mb-4">
          Gracias por tu inscripción
        </h2>
        <p className="text-base mb-2">
          En el transcurso del día recibirás un correo con más información
          acerca el taller
        </p>
        <p className="text-base mb-2">
          En caso de no recibir el mail, escríbenos a contacto@sintonia.soy
        </p>
        <Link href="/">
          <a className="underline text-sintopurple-300">
            Regresar a la página principal
          </a>
        </Link>
      </div>
    </Layout>
  );
}
