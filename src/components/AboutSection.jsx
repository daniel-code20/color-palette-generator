import React from "react";

const AboutSection = () => {
  return (
    <div
  id="about"
  className="text-blue-950 px-6 py-48 bg-white" // Ajustamos el padding a 16 para que la sección tenga más espacio
>
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
    {/* Texto */}
    <div className="w-full text-center md:text-left mb-8 md:mb-0 animate-fade-in-left">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 text-blue-950">
        ¡Hola! Esta herramienta está hecha con cariño, para ti✨
      </h2>
      <p className="text-lg lg:text-xl font-normal mb-6">
        Soy <span className="font-semibold">Daniel Tejada</span>, y he
        creado esta herramienta para que puedas{" "}
        <span className="text-blue-950">jugar con los colores</span> de
        manera divertida y <span className="text-blue-950">creativa</span>.
        💡
      </p>
      <p className="text-lg lg:text-xl font-normal">
        Aquí puedes{" "}
        <span className="text-blue-950">descubrir paletas únicas</span> a
        partir de imágenes 🖼️ o{" "}
        <span className="text-blue-950">crear combinaciones al azar</span>{" "}
        que se ven geniales en una interfaz simulada. 🚀
      </p>
    </div>

    {/* Imagen */}
    <div className="w-full flex justify-center md:justify-end md:w-1/2 animate-fade-in-right">
      <img
        src="/icon.png" // Cambia esta ruta por la de tu imagen
        alt="Foto de Daniel Tejada"
        className="rounded-full shadow-xl object-cover transform hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </div>
  </div>
</div>

  );
};

export default AboutSection;
