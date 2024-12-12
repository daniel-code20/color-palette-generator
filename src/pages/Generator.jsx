import React, { useState } from "react";
import Navbar from "../components/Navbar";

function RandomPalette() {
  const [palette, setPalette] = useState([]);
  const [loading, setLoading] = useState(false);

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
  

  // Llamada inicial para cargar una paleta al montar el componente
  React.useEffect(() => {
    fetchRandomPalette();
  }, []);

  return (
    <>
    <Navbar />
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Generador de Paletas</h1>
      {loading ? (
        <p className="text-center text-gray-500">Cargando...</p>
      ) : (
        <div className="flex justify-center gap-4 mb-6">
          {palette.map((color, index) => (
            <div
              key={index}
              className="w-16 h-16 rounded shadow-md"
              style={{
                backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
              }}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={fetchRandomPalette}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={loading}
        >
          Generar Nueva Paleta
        </button>
      </div>
    </div>
    </>
  );
}

export default RandomPalette;
