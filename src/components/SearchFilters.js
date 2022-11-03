// Va a recibir un array que tiene los distintas opciones, va a ser usado multiples veces

export default function SearchFilters({ options, placeholder }) {
  return (
    <>
      <select
        type="text"
        placeholder={placeholder}
        value={placeholder}
        className="bg-transparent border-2 w-1/5 appearance-none border-gray-200 rounded-xl py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:border-purple-500 mt-3 p-3"
      >
        {[options]}
      </select>
    </>
  );
}

// Esta es la estructura para los filtros. Reciben parametros para el lanzamiento de las querys. Necesito tener un control de estados?? Para manejar las querys. Aunque se pueden guardar en cache y utilizarlas...

// Necesito otro componente para renderizar los elementos.
