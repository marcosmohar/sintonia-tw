import Layout from "../components/layout";
import Head from "next/head";

export default function Privacidad() {
  return (
    <>
      <Head>Aviso de Privacidad - Sintonia.Soy</Head>
      <Layout>
        <article className="max-w-5xl mx-auto mt-16 py-20">
          <div>
            <h1 className="text-3xl font-semibold mt-6 mb-4">
              AVISO DE PRIVACIDAD
            </h1>

            <h2 className="text-xl font-semibold mt-6 mb-4">¿Quienes somos?</h2>
            <p className="mb-2">
              Sintonía Plataforma, S.C. con domicilio en Cantaro 33 Ent B,
              Caporal y Prolongación División del Norte, Villa Coapa, C.P.
              14390, Tlalpan, Ciudad de México. Somos comercialmente conocidos
              como Sintonía SOY.
            </p>
            <p className="mb-2">
              La persona responsable del uso y protección de los datos
              personales recabados de nuestros clientes es Mariana Rodríguez del
              Real, y puede ser contactada en cualquier momento a través del
              correo electrónico contacto@sintonia.soy.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">
              ¿Cuáles son los datos personales que recabamos?
            </h2>
            <ul className="mb-4">
              <li>Nombre.</li>
              <li>Teléfono de contacto.</li>
              <li>Correo electrónico.</li>
            </ul>
            <p className="mb-2">
              Sintonía SOY no recaba ningún dato sensible que pueda revelar
              aspectos como origen racial o étnico, estado de salud presente o
              futuro, información genética, creencias religiosas, filosóficas y
              morales, afiliación sindical, opiniones políticas, o preferencia
              sexual.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">
              ¿Para qué fines utilizamos sus datos personales?
            </h2>
            <p className="mb-2">
              Los datos personales que recabamos son utilizados para poder
              cumplir con el servicio solicitado, relacionado con la
              contratación de los cursos y talleres impartidos por los maestros
              y especialistas que imparten sus conocimientos a través de
              Sintonía SOY.
            </p>
            <p className="mb-2">
              Además, la información que proporcione se utilizará para las
              siguientes finalidades que no son necesarias, pero que nos
              permiten y facilitan brindarle una mejor atención (los
              “Tratamientos Adicionales”):
            </p>

            <ul className="list-disc ml-5 mb-4">
              <li>Sugerencias de clases y talleres de su interés.</li>
              <li>
                Notificación de promociones y de la existencia de nuevos
                talleres y cursos.
              </li>
              <li>
                Agilizar la contratación y pago de talleres y clases futuras.
              </li>
              <li>Generación de una cuenta individual y personalizada.</li>
            </ul>

            <p className="mb-2">
              En caso de oponerse a cualquiera de los Tratamientos Adicionales,
              puede comunicarse con nosotros al correo contacto@sintonia.soy. La
              negativa para el uso de sus datos personales para las finalidades
              de los Tratamientos Adicionales no podrá ser un motivo para que le
              neguemos los servicios que solicita de nosotros.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">
              Utilización de Cookies
            </h2>
            <p className="mb-2">
              Las cookies son identificadores únicos que transferimos a su
              dispositivo para permitir a nuestro sistema el reconocimiento de
              su dispositivo y proporcionar anuncios personalizados en otros
              sitios web.
            </p>
            <p className="mb-2">
              La información se recibe y almacena cada vez que navega a través
              de nuestro sitio web.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">
              Transferencia de sus datos personales
            </h2>
            <p className="mb-2">
              A efecto de poder cumplir exitosamente con los servicios que
              requiere de nosotros, compartimos sus datos personales con
              terceros proveedores de servicios para que realicen funciones a
              nuestro nombre, incluyendo asistentes de marketing y analistas de
              datos.
            </p>
            <p className="mb-2">
              Asimismo, Sintonía SOY compartirá sus datos personales cuando sea
              requerido por parte de una autoridad o para dar cumplimiento con
              alguna disposición legal federal, estatal o municipal.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">Derechos ARCO</h2>
            <p className="mb-2">
              Como usuario y cliente, usted puede ejercer, en cualquier momento
              acceder, rectificación, cancelar u oponerse (derechos ARCO) al
              tratamiento de sus datos personales. Para tal efecto, ponemos a su
              disposición el siguiente correo de contacto contacto@sintonia.soy.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-4">
              Cambios al aviso de privacidad
            </h2>
            <p className="mb-2">
              Usted podrá consultar en cualquier momento nuestro aviso de
              privacidad en nuestro sitio web.
            </p>

            <p className="mb-2">
              Cualquier modificación del presente aviso de privacidad será
              notificada al correo electrónico que nos haya proporcionado.Clases
            </p>
          </div>
        </article>
      </Layout>
    </>
  );
}
