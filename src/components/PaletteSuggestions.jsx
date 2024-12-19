import { useState, useEffect } from "react";

function PaletteSuggestions() {
  const [palettes, setPalettes] = useState([]); // Estado para guardar las paletas
  const [loading, setLoading] = useState(false);

  // Función para obtener las paletas desde la API
  const fetchPalettes = async () => {
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
        throw new Error("Error al obtener las paletas de colores");
      }

      const jsonResponse = await response.json();
      console.log("Respuesta de la API:", jsonResponse); // Verificamos la respuesta

      // Aseguramos que la respuesta contiene un 'result' con un array de colores
      if (jsonResponse.result && Array.isArray(jsonResponse.result)) {
        setPalettes(jsonResponse.result);
        console.log("Palettes después de setPalettes:", jsonResponse.result); // Verificamos los datos
      } else {
        console.error("La respuesta no contiene 'result' o no es un array.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Llamar a la API cuando el componente se monta
  useEffect(() => {
    fetchPalettes();
  }, []);

  console.log("Palettes:", palettes); // Verificar el contenido de las paletas

  return (
    <section id="suggestions" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Sugerencias de Paletas
      </h2>

      {/* Mostrar el loader mientras se obtienen los datos */}
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : (
        <div className="space-y-16">
          {palettes.length === 0 ? (
            <p className="text-center">No se encontraron paletas.</p>
          ) : (
            palettes.map((palette, index) => (
              <div key={index}>
                <h3 className="text-2xl font-semibold text-center mb-6">
                  {`Paleta ${index + 1}`}
                </h3>

                <div className="grid grid-cols-4 gap-6">
                  {/* Verificar que el array de colores esté definido */}
                  {palette.map((color, idx) => {
                    console.log(`Color ${idx + 1}:`, color); // Verificando los colores en la consola
                    const hexColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`; // Convertir en formato rgb
                    return (
                      <div
                        key={idx}
                        className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative group cursor-pointer transition-transform duration-300 transform hover:scale-110 border-2 border-gray-300"
                        style={{ backgroundColor: hexColor }}
                      >
                        <span className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {hexColor}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default PaletteSuggestions;
