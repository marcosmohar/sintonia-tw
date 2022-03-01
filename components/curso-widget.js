export default function Widgetcourse(props) {
  return (
    <div
      id="pagar"
      className="w-full lg:max-w-lg mx-auto mt-12 max-w-screen-md bg-white shadow-lg text-base"
    >
      <div className="p-4 border-t border-b md:border md:rounded">
        <div className="flex py-2">
          <img
            src={props.avatar}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm">
              {" "}
              {props.especialista}{" "}
            </p>
            <p className="font-semibold text-gray-600 text-xs">
              {" "}
              {props.trabajo}{" "}
            </p>
          </div>
        </div>
        <div className="flex py-4 border-t border-gray-300 text-gray-700 justify-between">
          <div className="flex-1 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#4a5568"
              width="20px"
              height="20px"
              className="mr-1"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
            </svg>
            <p className="flex">Fecha:</p>
          </div>
          <div className="flex-1 inline-flex items-center">
            <p className="flex text-gray-800 text-sm">{props.fecha}</p>
          </div>
        </div>
        <div className="flex py-4 border-t border-gray-300 text-gray-700 justify-between">
          <div className="flex-1 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4 mr-1"
            >
              <path d="M170.667 0c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333S256 132.395 256 85.333 217.728 0 170.667 0zm0 128C147.136 128 128 108.864 128 85.333c0-23.531 19.136-42.667 42.667-42.667 23.531 0 42.667 19.136 42.667 42.667-.001 23.531-19.137 42.667-42.667 42.667zM192 192h-42.667c-70.592 0-128 57.408-128 128 0 11.797 9.557 21.333 21.333 21.333S64 331.797 64 320c0-47.061 38.272-85.333 85.333-85.333H192c11.776 0 21.333-9.557 21.333-21.333S203.776 192 192 192zM341.333 170.667C294.272 170.667 256 208.939 256 256s38.272 85.333 85.333 85.333 85.333-38.272 85.333-85.333-38.271-85.333-85.333-85.333zm0 128c-23.531 0-42.667-19.136-42.667-42.667s19.136-42.667 42.667-42.667C364.864 213.333 384 232.469 384 256s-19.136 42.667-42.667 42.667zM362.667 362.667H320c-70.592 0-128 57.408-128 128 0 11.797 9.557 21.333 21.333 21.333s21.333-9.536 21.333-21.333c0-47.061 38.272-85.333 85.333-85.333h42.667c47.061 0 85.333 38.272 85.333 85.333 0 11.797 9.536 21.333 21.333 21.333 11.797 0 21.333-9.536 21.333-21.333.002-70.592-57.406-128-127.998-128z" />
            </svg>
            <p className="flex text-sm">
              <span className="text-gray-900 font-bold mr-1">
                {props.sesiones}{" "}
              </span>{" "}
              Sesiones
            </p>
          </div>
          <div className="flex-1 inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-4 w-4 "
            >
              <path d="M278.622 224.006V110.243a151.685 151.685 0 0166.901 29.087 23.943 23.943 0 0013.251 4.201c15.222 0 27.633-12.249 27.794-27.471a24.674 24.674 0 00-7.11-17.452 170.544 170.544 0 00-101.159-40.722V19.749c0-10.892-8.823-19.715-19.715-19.715-.226-.032-.453-.032-.679-.032-11.053-.162-20.167 8.662-20.329 19.747v36.844c-72.718 5.171-122.166 50.095-122.166 109.885 0 73.364 62.376 93.726 122.166 109.885V405.64c-31.544-4.234-61.277-17.323-85.646-37.813-4.589-3.652-10.278-5.688-16.16-5.817-14.899 1.034-26.372 13.509-26.179 28.441a24.674 24.674 0 007.11 17.452 190.344 190.344 0 00121.197 48.802v35.551c0 .226.032.453.032.679.517 11.053 9.922 19.585 20.975 19.036 10.892 0 19.715-8.823 19.715-19.715v-36.197c88.231-5.817 123.782-59.467 123.782-116.349.002-76.274-63.989-99.544-123.78-115.704zM237.9 213.664c-35.228-10.342-62.699-21.007-62.699-51.064s24.886-51.711 62.699-54.619v105.683zm40.722 192.622V288.645c36.521 10.342 64.961 24.239 64.638 58.174 0 24.563-16.806 53.65-64.638 59.467z"></path>
            </svg>
            <p className="flex text-gray-800">{props.costo} mxn</p>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <details className="py-4 flex-1 inline-flex items-center">
            <summary className="uppercase font-semibold text-purple-800">
              Pagar con Tarjeta (Stripe)
            </summary>
            <dl className="ml-4 mt-4">{props.button}</dl>
          </details>
          <details className="py-4 flex-1 inline-flex items-center">
            <summary className="uppercase font-semibold text-purple-800">
              Pagar con Transferencia
            </summary>
            <dl className="ml-4">{props.instrucciones}</dl>
          </details>
        </div>
      </div>
    </div>
  );
}
