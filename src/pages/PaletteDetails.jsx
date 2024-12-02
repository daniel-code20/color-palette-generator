import { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function PaletteDetails() {
  const location = useLocation();
  const { palette, paletteTitle } = location.state;

  const [showCSS, setShowCSS] = useState(false);

  const hexToRgba = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Texto copiado al portapapeles.");
    });
  };

  const generateCSS = () =>
    palette
      .map((color, idx) => `.color-${idx} { background-color: ${color}; }`)
      .join("\n");

  const generateTailwind = () =>
    palette
      .map((color, idx) => `color-${idx}: "${color}";`)
      .join("\n");

  return (
    <>
      <Navbar />
      <section id="palette-details" className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">{paletteTitle}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {palette.map((color, idx) => (
            <div
              key={idx}
              className="w-20 h-40 rounded-md shadow-md flex flex-col items-center justify-center p-2"
            >
              <div
                className="w-full h-20"
                style={{ backgroundColor: color }}
              ></div>
              <div className="text-center mt-2 text-sm text-gray-700">
                {color}
              </div>
              <div className="text-center mt-1 text-xs text-gray-500">
                {hexToRgba(color)}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            onClick={() => setShowCSS(!showCSS)}
          >
            Generar CSS
          </button>
        </div>

        {showCSS && (
          <div className="mt-8">
            <div className="mb-4">
              <h3 className="text-2xl font-bold">CSS</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-auto">
                {generateCSS()}
              </pre>
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={() => handleCopy(generateCSS())}
              >
                Copiar CSS
              </button>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold">Tailwind</h3>
              <pre className="bg-gray-800 text-white p-4 rounded-md mt-2 overflow-auto">
                {generateTailwind()}
              </pre>
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                onClick={() => handleCopy(generateTailwind())}
              >
                Copiar Tailwind
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default PaletteDetails;
