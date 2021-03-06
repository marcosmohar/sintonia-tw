export default function Especialista(props) {
  return (
    <>
      <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src={props.url}
          alt="Person"
        />
        <div className=" flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 lg:absolute lg:inset-0 lg:opacity-0 lg:hover:opacity-100">
          <p className="mb-1 text-lg font-bold text-gray-100">{props.nombre}</p>
          <p className="mb-4 text-xs text-gray-100">{props.titulo}</p>
          <p className="mb-4 text-xs tracking-wide text-gray-400">
            {props.especialidad}
          </p>
        </div>
      </div>
    </>
  );
}
