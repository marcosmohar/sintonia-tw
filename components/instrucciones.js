export default function Instrucciones() {
  return (
    <ol className="list-decimal">
      <li className="mt-4">
        Realiza el pago COMPLETO del programa al que quieres inscribirte a la
        siguiente cuenta: <br />
      </li>
      <p className="my-2 text-base">
        <span className="font-semibold">Sintonía Plataforma</span> <br />
        BBVA Bancomer
        <br />
        <span className="font-medium text-green-700">Cuenta: </span>
        011738025
        <br />
        <span className="font-medium text-green-700">Clabe: </span>
        012180001173802592
        <br />
      </p>
      <li>
        Envíanos el comprobante de pago por mail :<br />
      </li>
      <p className="mt-1 mb-2 font-semibold text-base">contacto@sintonia.soy</p>
      <li>
        Incluye en el correo los siguientes datos: <br />
      </li>
      <ul className="list-disc font-medium my-1 text-base">
        <li>NOMBRE COMPLETO</li>
        <li>PROGRAMA/SESION A LA QUE TE INSCRIBISTE</li>
      </ul>
      <span className="text-green-700 font-semibold">IMPORTANTE</span>:
      Recibirás un correo de recepción e información durante el día en que
      enviaste el comprobante
    </ol>
  );
}
