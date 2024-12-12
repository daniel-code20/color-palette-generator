import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animation/lottie.json';

function HeroSection() {
  const handleScroll = () => {
    const paletteSection = document.getElementById('palette-generator');
    if (paletteSection) {
      paletteSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="hero"
      className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4 py-16 min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            ¡Crea tus paletas de colores perfectas!
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Sube una imagen o genera paletas aleatorias en segundos.
          </p>
          <button
            onClick={handleScroll}
            className="bg-white text-indigo-600 px-6 py-3 font-medium rounded-full shadow-md hover:bg-gray-200 transition"
          >
            Empezar
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <Lottie animationData={animationData} loop={true} className="w-64 md:w-96" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
