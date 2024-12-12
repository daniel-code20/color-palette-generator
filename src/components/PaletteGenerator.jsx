import React, { useState } from "react";
import ColorThief from "colorthief";

function PaletteGenerator() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [palette, setPalette] = useState([]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
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
        setPalette(colorPalette.map((color) => `rgb(${color.join(",")})`));
      } catch (error) {
        console.error("Error al extraer los colores:", error);
      }
    };
  };

  return (
    <section
  id="palette-generator"
  className="bg-white flex items-center justify-center p-10 scroll-mt-16 min-h-screen"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl w-full">
    {/* Sección Izquierda */}
    <div className="flex flex-col items-start space-y-6">
      <img
        src="https://via.placeholder.com/400x300"
        alt="Representación visual"
        className="w-full h-auto rounded-lg shadow-md"
      />
      <h2 className="text-4xl font-extrabold text-gray-800">
        Extrae la paleta de colores de una imagen
      </h2>
      <p className="text-lg text-gray-600">
        Sube cualquier imagen y genera una hermosa paleta de colores en cuestión
        de segundos. Ideal para diseñadores, artistas y entusiastas del color.
      </p>
    </div>

    {/* Sección Derecha */}
    <div className="flex flex-col items-center space-y-6">
      {/* Dropbox */}
      {!selectedImage && (
        <div className="w-full max-w-md border-4 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center bg-gray-50 shadow-md hover:shadow-lg transition-shadow duration-300">
          <label
            htmlFor="upload"
            className="bg-blue-500 text-white px-8 py-4 rounded-full shadow-md cursor-pointer hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 text-lg"
          >
            📥 Subir Imagen
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
      )}

      {/* Vista previa de la imagen */}
      {selectedImage && (
        <div className="relative mb-6">
          <img
            src={selectedImage}
            alt="Vista previa"
            className="w-80 h-auto rounded-lg shadow-lg border-4 border-gray-200"
          />
          <span className="absolute top-0 right-0 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-bl-lg">
            Vista Previa
          </span>
        </div>
      )}
       <div className="grid grid-cols-5 gap-6 mt-6">
      {palette.length > 0
        ? palette.map((color, idx) => (
            <div
              key={idx}
              className="w-20 h-20 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300"
              style={{ backgroundColor: color }}
            />
          ))
        : ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F6"].map(
            (color, idx) => (
              <div
                key={idx}
                className="w-20 h-20 rounded-full shadow-lg animate-pulse"
                style={{ backgroundColor: color }}
              />
            )
          )}
    </div>

      {/* Botón para subir otra imagen */}
      {selectedImage && (
        <div>
          <label
            htmlFor="upload"
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md cursor-pointer hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105 text-lg"
          >
            Subir otra imagen
          </label>
        </div>
      )}
    </div>
  </div>
</section>


  );
}

export default PaletteGenerator;
