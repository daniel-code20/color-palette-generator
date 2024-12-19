import React from "react";

function PaletteSuggestions() {
  return (
    <section className="px-6 py-48 bg-gray-100 flex items-center justify-center p-10">
  {/* Contenedor principal que cambia la dirección de flex */}
  <div className="flex flex-col md:flex-row items-center justify-center w-full">
    
    {/* Imagen del mockup */}
    <div className="w-full flex justify-center mb-8 md:mb-0 md:w-1/2">
      <img
        src="/mockup6.png"
        alt="Mockup de la herramienta de paletas de colores"
        className="w-full max-w-2xl rounded-lg h-auto object-contain"
      />
    </div>

    {/* Contenido del texto */}
    <div className="w-full text-center md:text-left flex flex-col items-center md:items-start md:w-1/2">
      <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-950 leading-tight">
        Generador de Paletas de{" "}
        <br />
        <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
          Colores
        </span>
      </h2>

      <p className="text-lg lg:text-xl text-blue-950 mt-4 max-w-xl mx-auto lg:mx-0">
        Descubre combinaciones de colores únicas y visualízalas aplicadas a
        una interfaz simulada. Nuestra herramienta te ayuda a encontrar la
        inspiración que necesitas para tus proyectos creativos. Experimenta
        con diferentes estilos y encuentra la paleta ideal para tus diseños.
      </p>

      <button
        className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white mt-4 px-6 py-2 font-medium rounded-full shadow-xl hover:bg-gradient-to-r hover:from-violet-700 hover:to-indigo-700 transition-transform duration-200 transform hover:scale-105"
        onClick={() => (window.location.href = "/palette-generator")}
      >
        Ir al Generador
      </button>
    </div>
  </div>
</section>


  );
}

export default PaletteSuggestions;
