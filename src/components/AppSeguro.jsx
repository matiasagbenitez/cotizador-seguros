import React from "react";
import { Formulario } from "./Formulario";
import { Spinner } from "./Spinner";
import { Resultado } from "./Resultado";
import { useCotizador } from "../hooks/useCotizador";

export const AppSeguro = () => {
  const { resultado, cargando } = useCotizador();
  return (
    <>
      <header>
        <h1 className="font-bold bg-slate-700 text-center p-8 text-3xl md:text-4xl lg:text-5xl uppercase text-white">
          Cotizador de seguros de autos
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto md:mt-5 py-8 px-5 md:rounded-lg">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  );
};
