import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmitForm(values) {
    {
      let config = {
        method: "post",
        url: `/api/contact`,
        headers: {
          "Content-Type": "application/json",
        },
        data: values,
      };

      try {
        const response = await axios(config);
        console.log(response);
        if (response.status == 200) {
          reset();
        }
      } catch (err) {}
    }
  }

  return (
    <div className="py-16 px-4 sm:px-6  flex justify-center items-center">
      <div className="mx-auto w-full max-w-2xl rounded-xl bg-white p-8 border-sintopurple-50 border-4">
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="grid grid-cols-1 gap-y-6"
        >
          <div>
            <label htmlFor="name" className="text-xs uppercase ">
              Nombre
            </label>
            <input
              type="text"
              {...register("name", {
                required: {
                  value: true,
                  message: "El nombre es requerido",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.name ? "ring-2 ring-red-500" : null
              }`}
              placeholder="Nombre completo"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.name?.message}
            </span>
          </div>
          <div>
            <label htmlFor="email" className="">
              Email
            </label>
            <input
              name="email"
              type="text"
              {...register("email", {
                required: {
                  value: true,
                  message: "El email es requerido",
                },
                minLength: {
                  value: 7,
                  message: "Demasiado corto para ser email",
                },
                maxLength: {
                  value: 180,
                  message: "Demasiado largo para ser email",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Debes proporcionar una dirección de correo válida",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "ring-2 ring-red-500" : null
              }`}
              placeholder="usuario@ejemplo.com"
            />
            <span className="text-red-400 text-sm py-2">
              {errors?.email?.message}
            </span>
          </div>
          <div>
            <label htmlFor="empresa" className="sr-only">
              Empresa
            </label>
            <input
              type="text"
              name="empresa"
              {...register("empresa")}
              className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2"
              placeholder="Empresa"
            />
          </div>
          <div>
            <label htmlFor="message" className="">
              Message
            </label>
            <textarea
              name="mensaje"
              rows="5"
              {...register("mensaje", {
                required: {
                  value: true,
                  message: "El mensaje no puede ir vacío",
                },
                minLength: {
                  value: 30,
                  message: "Tu mensaje debe ser de mínimo 30 caracteres!",
                },
                maxLength: {
                  value: 1500,
                  message: "Tu mensaje no puede ser mayor a 1500 caracteres",
                },
              })}
              className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                errors.message ? "ring-2 ring-red-500" : null
              }`}
              placeholder="Tu mensaje"
            ></textarea>
            <span className="text-red-400 text-sm py-2">
              {errors?.mensaje?.message}
            </span>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-3 px-6 border border-transparent shadow text-base font-medium rounded-md text-white bg-sintogreen-600 hover:bg-sintogreen-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sintogreen-500"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
