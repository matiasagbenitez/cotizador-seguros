import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";

export const Formulario = () => {
  console.log(YEARS);
  return (
    <>
      <form action="" className="p-3">
        <div className="mb-3">
          <label className="block mb-2 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select className="w-full border border-gray-400 rounded p-2">
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
          <select className="w-full border border-gray-400 rounded p-2">
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
                  />
                  <label className="mr-3">{plan.nombre}</label>
              </Fragment>
            ))}
          </div>
        </div>

        <input type="submit" className="w-full bg-sky-500 hover:bg-sky-600 transition-colors text-white cursor-pointer p-2 uppercase font-bold" value={'Cotizar'} />
      </form>
    </>
  );
};
