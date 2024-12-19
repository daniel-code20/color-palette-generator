import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { toast, ToastContainer } from "react-toastify";
import { FaArrowCircleRight, FaSave } from "react-icons/fa";

function RandomPalette() {
  const [palette, setPalette] = useState([]);
  const [loading, setLoading] = useState(false);
  const [savedPalettes, setSavedPalettes] = useState([]); // Estado para guardar las paletas

  // Función para obtener una paleta aleatoria desde la API
  const fetchRandomPalette = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/palette", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ model: "default" }),
      });

      if (!response.ok) {
        throw new Error("Error al obtener la paleta de colores");
      }

      const data = await response.json();
      setPalette(data.result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Función para guardar la paleta actual
  // Función para guardar la paleta actual
  const saveCurrentPalette = () => {
    if (palette.length > 0) {
      const newPalette = {
        name: `Paleta ${savedPalettes.length + 1}`,
        colors: palette, // Guardar el arreglo completo de colores
      };
      setSavedPalettes([...savedPalettes, newPalette]);
    }
  };

  // Función para aplicar una paleta guardada
  const applySavedPalette = (savedPalette) => {
    setPalette(savedPalette);
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

  // Llamada inicial para cargar una paleta al montar el componente
  React.useEffect(() => {
    fetchRandomPalette();
  }, []);

  // Función para convertir RGB a hexadecimal
  const rgbToHex = (r, g, b) => {
    return (
      "#" +
      [r, g, b]
        .map((x) => x.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 p-40 flex justify-center items-center animate__animated animate__fadeIn">
        <div className="w-full max-w-7xl">
          {/* Título principal */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-blue-950 tracking-wide">
              Generador de Paletas
            </h1>
            <p className="text-blue-950 mt-2">
              Explora y guarda paletas de colores dinámicas para tus proyectos.
            </p>
          </div>

          {/* Sección de paleta y UI simulada */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            {/* Contenedor con sombra para generar separación */}
            <div className="w-full sm:w-2/3 bg-white rounded-lg shadow-xl p-8">
              <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                {/* Paleta de colores */}
                <div className="w-full sm:w-1/3 flex flex-col items-start">
                  {loading ? (
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                      <svg
                        className="text-gray-300 animate-spin"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                          stroke="currentColor"
                          stroke-width="5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                          stroke="currentColor"
                          stroke-width="5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="text-gray-900"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <>
                      {/* Paleta de colores */}
                      {palette.length > 0 && (
                        <div className="flex flex-wrap justify-start gap-4 mb-6 overflow-hidden">
                          {palette.map((color, index) => {
                            const hexColor = rgbToHex(
                              color[0],
                              color[1],
                              color[2]
                            );
                            return (
                              <div
                                key={index}
                                className="w-16 h-16 rounded-lg shadow-sm transform cursor-pointer transition-transform hover:scale-105 relative group"
                                style={{
                                  backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                                  maxWidth: "100%", // Asegura que el cuadro de color no se salga
                                }}
                                onClick={() => handleCopyColor(hexColor)}
                              >
                                <span className="absolute inset-0 flex items-center justify-center bg-opacity-50 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {hexColor}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Contenedor de íconos */}
                      <div className="flex flex-row justify-center gap-6">
                        {/* Icono de Generar Nueva Paleta */}
                        <div
                          onClick={fetchRandomPalette}
                          className="bg-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-105"
                        >
                          <FaArrowCircleRight size={30} />
                        </div>

                        {/* Icono de Guardar Paleta */}
                        <div
                          onClick={saveCurrentPalette}
                          className="bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-105"
                        >
                          <FaSave size={30} />
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Simulación de UI */}
                {palette.length > 0 && (
                  <div
                    className="bg-white rounded-lg shadow-md p-4 text-center max-w-sm mx-auto"
                    style={{
                      boxShadow: `0 4px 12px rgba(${palette[3][0]}, ${palette[3][1]}, ${palette[3][2]}, 0.3)`,
                    }}
                  >
                    {/* Imagen redonda */}
                    <div className="flex justify-center mb-4">
                      <img
                        src="/image.png"
                        alt="Ejemplo"
                        className="w-24 h-24 rounded-full shadow-lg object-cover"
                        style={{
                          borderColor: `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`,
                        }}
                      />
                    </div>

                    {/* Título */}
                    <h2
                      className="text-2xl font-bold mb-2"
                      style={{
                        color: `rgb(${palette[4][0]}, ${palette[4][1]}, ${palette[4][2]})`,
                      }}
                    >
                      Título de la Card
                    </h2>

                    {/* Descripción */}
                    <p className="text-gray-600 mb-4">
                      Explora cómo aplicar los colores generados en un diseño
                      moderno.
                    </p>

                    {/* Botón */}
                    <button
                      className="px-6 py-2 rounded-lg font-semibold text-white transition-transform transform hover:scale-105 shadow-md w-full"
                      style={{
                        backgroundColor: `rgb(${palette[2][0]}, ${palette[2][1]}, ${palette[2][2]})`,
                        borderColor: `rgb(${palette[3][0]}, ${palette[3][1]}, ${palette[3][2]})`,
                      }}
                    >
                      Acción
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Contenedor de paletas guardadas */}
          <div className="mt-10 w-full max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-6 text-blue-950">
              Paletas Guardadas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {savedPalettes.map((savedPalette, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center rounded-lg shadow-lg p-4 bg-white transition-transform hover:scale-105 cursor-pointer"
                  onClick={() => applySavedPalette(savedPalette.colors)}
                >
                  <div className="flex w-full h-24 rounded-lg mb-4">
                    {savedPalette.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="flex-1"
                        style={{
                          backgroundColor: `rgb(${color.join(",")})`,
                        }}
                      />
                    ))}
                  </div>
                  <p className="font-semibold text-lg text-gray-800 mb-2">
                    {savedPalette.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RandomPalette;
