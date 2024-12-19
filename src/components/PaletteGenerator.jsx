import React, { useState } from "react";
import ColorThief from "colorthief";
import Lottie from "lottie-react";
import { toast, ToastContainer } from "react-toastify";
import animationData from "../animation/Palette.json";

function PaletteGenerator() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [palette, setPalette] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleImageUpload = (event) => {
    let file;

    // Validar si es un evento de input o un evento de arrastre
    if (event.target && event.target.files && event.target.files.length > 0) {
      file = event.target.files[0]; // Archivo desde input
    } else if (
      event.dataTransfer &&
      event.dataTransfer.files &&
      event.dataTransfer.files.length > 0
    ) {
      file = event.dataTransfer.files[0]; // Archivo arrastrado
    }

    // Validar si el archivo es una imagen
    if (file && file.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      extractColors(imageUrl);

      // Notificación de éxito
      toast("🎉 Imagen cargada con éxito", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        className:
          "rounded-md p-4 text-center bg-gradient-to-br from-green-500 to-blue-500 text-white font-bold",
      });
    } else if (file) {
      // Notificación de error
      toast("⚠️ Solo se permiten archivos de imagen", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        className:
          "rounded-md p-4 text-center bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold",
      });
    } else {
      console.error("No se encontró ningún archivo en el evento.");
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

    img.onerror = () => {
      toast("⚠️ Error al cargar la imagen. Por favor, intenta con otra.", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        className:
          "rounded-md p-4 text-center bg-gradient-to-br from-red-500 to-orange-500 text-white font-bold",
      });
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
      toast("🚀 Color copiado", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        className:
          "rounded-md p-4 text-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white font-bold",
      });
    });
  };

  const handleDragOver = (event) => {
    event.preventDefault(); // Necesario para permitir el "drop"
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado
    setIsDragging(false);
    handleImageUpload(event); // Maneja la carga de la imagen desde el evento de "drop"
  };

  const resetImage = () => {
    setSelectedImage(null);
    setPalette([]);
  };

  return (
    <section
      id="palette-generator"
      className="bg-slate-50 min-h-screen flex items-center justify-center p-10"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Columna Izquierda */}
        <div className="space-y-6">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-64 md:w-80 mx-auto lg:mx-0"
          />
          <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-950 text-center lg:text-left leading-tight">
            Extrae la paleta de colores de una imagen al{" "}
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 ">
              Instante
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-blue-950 text-center lg:text-left">
            Sube una imagen para analizar sus colores y obtener una paleta en
            segundos. Perfecto para diseñadores y creativos.
          </p>
        </div>

        {/* Columna Derecha */}
        <div
          className={`flex flex-col items-center justify-center space-y-6 border-2 rounded-3xl p-8 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            isDragging
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300 border-dashed"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {!selectedImage ? (
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-7xl text-blue-500">📁</div>
              <p className="text-gray-600 text-lg text-center">
                Arrastra tu imagen aquí o selecciona una desde tu dispositivo.
              </p>
              <label
                htmlFor="upload"
                className="cursor-pointer py-3 px-6 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-200"
              >
                Subir Imagen
                <input
                  id="upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            </div>
          ) : (
            <div className="relative">
              <img
                src={selectedImage}
                alt="Vista previa"
                className="w-80 h-auto rounded-lg shadow-md border border-gray-200"
              />
              <button
                onClick={resetImage}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2 hover:bg-red-700"
              >
                ✕
              </button>
            </div>
          )}

          {/* Paleta */}
          {palette.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {palette.map((color, idx) => (
                <div
                  key={idx}
                  className="relative w-16 h-16 rounded-lg shadow-md group cursor-pointer transform hover:scale-110 rounded-lg transition duration-300"
                  style={{ backgroundColor: color }}
                  onClick={() => handleCopyColor(color)}
                >
                  <span className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {color}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default PaletteGenerator;
