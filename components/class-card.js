export default function ClassCard(props) {
  return (
    <>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="flex flex-col sm:flex-row bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full h-60 sm:h-96 sm:w-1/2 bg-gray-200 relative">
              <img
                src={props.img.url}
                alt={props.img.alt}
                className="w-full h-full object-cover"
              />
              {/*<Image
                alt={props.img.alt}
                src={props.img.url}
                layout="fill"
                objectFit="cover"
              />*/}
            </div>

            <div className="w-full sm:w-2/3 lg:w-1/2 flex items-center p-4 sm:p-8 lg:pl-10">
              <div className="flex flex-col justify-between p-4 leading-normal  z-10 ">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {props.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {props.subtitle}
                </p>
                <a
                  href={props.courseUrl}
                  className="bg-green-700 px-4 py-2 text-white rounded-md w-max hover:bg-green-600"
                >
                  Ver curso
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
