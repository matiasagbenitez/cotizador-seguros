import { useCallback, useMemo, useRef } from "react";
import { useCotizador } from "../hooks/useCotizador";
import { MARCAS, PLANES } from "../constants";

export const Resultado = () => {
  const { resultado, datos } = useCotizador();
  if (resultado === 0) return null;

  const { marca, year, plan } = datos;
  const yearRef = useRef(year);

  // useCallback
  const [nombreMarca] = useCallback(
    MARCAS.filter((m) => m.id === Number(marca)),
    [resultado]
  );

  // useMemo
  const [nombrePlan] = useMemo(
    () => PLANES.filter((p) => p.id === Number(plan)),
    [resultado]
  );

  return (
    <div className="bg-gray-200 mx-3 p-4 rounded-lg text-center space-y-1">
      <h2 className="text-2xl font-bold text-gray-600 mb-5 underline">
        Resumen de cotización
      </h2>
      <p className="text-gray-600">
        Marca: {""}
        <span className="font-bold">{nombreMarca.nombre}</span>
      </p>
      <p className="text-gray-600">
        Año: {""}
        <span className="font-bold">{yearRef.current}</span>
      </p>
      <p className="text-gray-600">
        Cobertura: {""}
        <span className="font-bold">{nombrePlan.nombre}</span>
      </p>

      <p className="text-gray-600 text-2xl font-bold">
        Total: {""}
        <span className="font-bold">{resultado}</span>
      </p>
    </div>
  );
};
