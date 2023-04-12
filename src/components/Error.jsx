import { useCotizador } from "../hooks/useCotizador";

export const Error = () => {
  const { error } = useCotizador();
  return (
    <div className="mx-3">
      <p className="border border-red-700 bg-red-200 py-2 text-red-700 text-center font-semibold uppercase rounded-lg text-sm">
        {error}
      </p>
    </div>
  );
};
