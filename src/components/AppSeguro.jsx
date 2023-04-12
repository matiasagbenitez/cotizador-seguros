import React from "react";
import { Formulario } from "./Formulario";

export const AppSeguro = () => {
  return (
    <>
      <header className="my-8">
        <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl uppercase text-sky-800">
          Cotizador de seguros de autos
        </h1>
      </header>

      <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-5">
        <Formulario />
      </main>
    </>
  );
};
