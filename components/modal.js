import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed z-20 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-30 z-20"></div>
        <div className="bg-white rounded p-3 max-w-sm md:max-w-6xl mx-auto relative flex flex-wrap lg:flex-nowrap z-30 mt-16 space-y-2">
          <button
            href="#"
            onClick={handleCloseClick}
            className="py-1 px-2 rounded-full w-auto bg-sintogreen-400 text-white absolute top-4 right-4 uppercase text-sm "
          >
            cerrar
          </button>
          {children}
        </div>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return createPortal(modalContent, document.getElementById("modal"));
  } else {
    return null;
  }
};

export default Modal;
