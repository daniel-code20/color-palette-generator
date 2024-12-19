import React from "react";
import Lottie from "lottie-react";
import animationData from "../animation/lottie.json";

function HeroSection() {
  const handleScroll = () => {
    const paletteSection = document.getElementById("palette-generator");
    if (paletteSection) {
      paletteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="hero"
      className=" text-blue-950 px-4 p-40 min-h-screen flex items-center justify-center animate__animated animate__fadeIn"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título más grande */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          ¡Crea tus paletas de colores{" "}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 ">
          perfectas!
          </span>{" "}
           
        </h1>

        {/* Texto descriptivo */}
        <p className="text-blue-950 text-lg md:text-xl font-normal mb-8">
          Sube una imagen o genera paletas aleatorias en segundos.
        </p>
        {/* Botón */}
        <button
          onClick={handleScroll}
          className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-2 font-medium rounded-full shadow-xl hover:bg-gradient-to-r hover:from-pink-600 hover:to-violet-600 transition-transform duration-200 transform hover:scale-105"
        >
          Empezar
        </button>

        {/* Mockup debajo del texto y botón */}
        <div>
          <img
            src="/mockup4.png"
            alt="Mockup"
            className="mx-auto max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
