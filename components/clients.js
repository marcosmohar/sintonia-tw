export default function Cliente() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl px-4  mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-evenly lg:justify-between flex-wrap space-y-10 sm:space-y-0">
          <img
            src="/clients/kraft-heinz.png"
            alt="Kraft logo"
            className="h-10 py-2"
          />
          <img
            src="/clients/reforma.png"
            alt="Reforma logo"
            className="h-10 py-1"
          />
          <img
            src="/clients/grupo-sm.png"
            alt="Grupo-SM logo"
            className="h-10 py-2"
          />
          <img
            src="/clients/sabadell.png"
            alt="Sabadell logo"
            className="h-10 py-2"
          />
          <img
            src="/clients/terapify.png"
            alt="Terapify logo"
            className="h-10 py-2"
          />
        </div>
      </div>
    </section>
  );
}
