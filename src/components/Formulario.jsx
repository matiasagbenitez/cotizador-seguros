import { Fragment } from "react";
import { Error } from "./Error";
import { MARCAS, YEARS, PLANES } from "../constants";
import { useCotizador } from "../hooks/useCotizador";

export const Formulario = () => {
  const { datos, handleChangeDatos, error, setError, cotizarSeguro } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(datos).includes("")) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError("");
    cotizarSeguro();
  };

  return (
    <>
      {error && <Error />}
      <form className="p-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block mb-2 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full border border-gray-400 rounded p-2"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value="">Seleccione una marca</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <label className="block mb-2 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full border border-gray-400 rounded p-2"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value="">Seleccione un año</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <label className="block mb-2 font-bold text-gray-400 uppercase">
            Tipo de cobertura
          </label>
          <div className="flex items-center gap-2">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  className="w-4 h-4"
                  onChange={(e) => handleChangeDatos(e)}
                />
                <label className="mr-3">{plan.nombre}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          className="w-full bg-sky-500 hover:bg-sky-600 transition-colors text-white cursor-pointer p-2 uppercase font-bold"
          value={"Cotizar"}
        />
      </form>
    </>
  );
};
