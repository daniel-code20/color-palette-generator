import React, { useState } from 'react';
import ColorThief from 'colorthief';

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
        const colorPalette = colorThief.getPalette(img, 6); 
        setPalette(colorPalette.map((color) => `rgb(${color.join(',')})`)); 
      } catch (error) {
        console.error('Error al extraer los colores:', error);
      }
    };
  };

  return (
    <section 
      id="palette-generator" 
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10 scroll-mt-16"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Generador de Paletas</h2>
      <div className="flex flex-col items-center">
        <label
          htmlFor="upload"
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 cursor-pointer hover:bg-blue-600 transition duration-300"
        >
          Subir Imagen
        </label>

        <input
          id="upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />

        {selectedImage && (
          <div className="mb-4">
            <img
              src={selectedImage}
              alt="Vista previa"
              className="w-64 h-auto rounded shadow-md"
            />
          </div>
        )}

        <div className="grid grid-cols-5 gap-4 mb-4">
          {palette.length > 0 ? (
            palette.map((color, idx) => (
              <div
                key={idx}
                className="w-16 h-16 rounded-lg shadow-md"
                style={{ backgroundColor: color }}
              />
            ))
          ) : (
            <>
              <div className="w-16 h-16 bg-red-500 rounded"></div>
              <div className="w-16 h-16 bg-green-500 rounded"></div>
              <div className="w-16 h-16 bg-blue-500 rounded"></div>
              <div className="w-16 h-16 bg-yellow-500 rounded"></div>
              <div className="w-16 h-16 bg-purple-500 rounded"></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default PaletteGenerator;
