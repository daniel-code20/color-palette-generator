import React, { useState } from "react";
import ColorThief from "colorthief";
import Lottie from "lottie-react";
import { toast, ToastContainer } from "react-toastify";
import animationData from "../animation/Palette.json";
import "react-toastify/dist/ReactToastify.css";

function PaletteGenerator() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [palette, setPalette] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0] || event.dataTransfer.files[0]; // Permitir archivos arrastrados
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      extractColors(imageUrl);
    }
  };

  const extractColors = (imageUrl) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      try {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 10);
        const hexPalette = colorPalette.map((color) =>
          rgbToHex(color[0], color[1], color[2])
        );
        setPalette(hexPalette);
      } catch (error) {
        console.error("Error al extraer los colores:", error);
      }
    };
  };

  const rgbToHex = (r, g, b) => {
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  };

  const handleCopyColor = (color) => {
    navigator.clipboard.writeText(color).then(() => {
      toast("🚀Color copiado", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        className: "rounded-md p-4 text-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-bold", 
        
    
      });
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necesario para permitir el "drop"
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado
    handleImageUpload(event); // Maneja la carga de la imagen desde el evento de "drop"
  };

  return (
    <section
      id="palette-generator"
      className="bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-10 scroll-mt-16 min-h-screen"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
        <div className="flex flex-col items-start space-y-6">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-64 md:w-96"
          />
          <h2 className="text-4xl font-extrabold text-gray-800">
            Extrae la paleta de colores de una imagen
          </h2>
          <p className="text-lg text-gray-600">
            Sube cualquier imagen y genera una hermosa paleta de colores en
            segundos. Ideal para diseñadores, artistas y entusiastas del color.
          </p>
        </div>

        <div
          className="flex flex-col items-center space-y-6"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {!selectedImage ? (
            <div className="w-full max-w-md border-4 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <label
                htmlFor="upload"
                className="flex flex-col items-center space-y-2 cursor-pointer"
              >
                <div className="text-6xl text-blue-500">📂</div>
                <span className="text-xl font-semibold text-blue-600">
                  Subir Imagen
                </span>
              </label>
              <input
                id="upload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <p className="mt-4 text-gray-600 text-lg text-center">
                Arrastra y suelta tu imagen o haz clic para seleccionarla.
              </p>
            </div>
          ) : (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Vista previa"
                className="w-80 h-auto rounded-lg shadow-lg border-4 border-gray-200"
              />
              <button
                // onClick={resetImage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600"
              >
                ✕
              </button>
            </div>
          )}

          <div className="grid grid-cols-5 gap-6 mt-6">
            {palette.length > 0
              ? palette.map((color, idx) => (
                  <div
                    key={idx}
                    className="relative w-24 h-24 rounded shadow-lg group transform hover:scale-110 transition-transform duration-300 cursor-pointer"
                    style={{ backgroundColor: color }}
                    onClick={() => handleCopyColor(color)}
                  >
                    {/* Texto del código de color */}
                    <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded truncate px-2 text-center">
                      {color}
                    </span>
                  </div>
                ))
              : ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"].map(
                  (color, idx) => (
                    <div
                      key={idx}
                      className="relative w-24 h-24 rounded shadow-lg animate-pulse"
                      style={{ backgroundColor: color }}
                    />
                  )
                )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default PaletteGenerator;
