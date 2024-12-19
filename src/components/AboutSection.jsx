import React from "react";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="text-blue-950 px-4 py-20 min-h-screen flex items-center justify-center bg-gray-100"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">Hola Amigo,</h2>
          <p className="text-lg font-normal mb-6">
            Soy <span className="font-semibold">Daniel Tejada</span> y he desarrollado esta herramienta para ayudarte a trabajar con colores de forma creativa.
          </p>
          <p className="text-lg font-normal">
            Esta herramienta te permite extraer paletas de colores de imágenes y también generar paletas de colores aleatorias que se muestran en una interfaz simulada.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/icon.png" // Cambia esta ruta por la de tu foto
            alt="Foto de Daniel Tejada"
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;