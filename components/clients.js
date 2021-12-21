export default function Cliente() {
  return (
    <section className="bg-gray-100 pt-10">
      <h2 className="text-center uppercase text-4xl text-gray-700 font-extrabold px-2 md:px-12 lg:px-4 mb-6 tracking-widest">
        Algunos de nuestros clientes
      </h2>
      <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-x-2">
          <img
            src="/clients/kraft-heinz.png"
            alt="Kraft logo"
            className="h-10"
          />
          <img src="/clients/sony.png" alt="Sony logo" className="h-10" />
          <img
            src="/clients/grupo-sm.png"
            alt="Grupo-SM logo"
            className="h-10"
          />
          <img
            src="/clients/sabadell.png"
            alt="Sabadell logo"
            className="h-10"
          />
          <img
            src="/clients/terapify.png"
            alt="Terapify logo"
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
}
