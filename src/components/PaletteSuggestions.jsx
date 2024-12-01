import { Link } from "react-router-dom";

function PaletteSuggestions() {
  const palettes = [
    {
      title: "Dark Mode",
      colors: [
        ["#121212", "#1F1F1F", "#2D2D2D", "#383838", "#454545"],
        ["#0D0D0D", "#242424", "#333333", "#3C3C3C", "#484848"],
        ["#1A1A1A", "#292929", "#363636", "#404040", "#4A4A4A"],
        ["#101010", "#181818", "#202020", "#282828", "#303030"],
      ],
    },
    {
      title: "Pastel Dreams",
      colors: [
        ["#FFD1DC", "#FFE4E1", "#FFDAC1", "#FAF0E6", "#FFF8DC"],
        ["#FFB6C1", "#FFC0CB", "#FFE4B5", "#FFF0F5", "#FFFACD"],
        ["#FFF5EE", "#FDF5E6", "#FAEBD7", "#FFFDD0", "#FFFACD"],
        ["#F0FFF0", "#E6E6FA", "#FFB3BA", "#FFD700", "#FFDFBA"],
      ],
    },
    {
      title: "Vibrant Pop",
      colors: [
        ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F"],
        ["#581845", "#FF6F61", "#FFB400", "#FF5733", "#FFC300"],
        ["#FF4500", "#FF6347", "#FFD700", "#FF7F50", "#FF8C00"],
        ["#FF69B4", "#FF1493", "#FF6347", "#FFA500", "#FF4500"],
      ],
    },
  ];

  return (
    <section id="suggestions" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Sugerencias de Paletas
      </h2>
      <div className="space-y-16">
        {palettes.map((palette) => (
          <div key={palette.title}>
            <h3 className="text-2xl font-semibold text-center mb-6">
              {palette.title}
            </h3>
            <div className="grid grid-cols-4 gap-6">
              {palette.colors.map((colorSet, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full h-40 border rounded-lg overflow-hidden shadow-md"
                >
                  {colorSet.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex-1 group relative"
                      style={{ backgroundColor: color }}
                      title={color}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-xs text-white bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {color}
                      </span>
                    </div>
                  ))}

                  <div className="mt-4 text-center">
                    <Link
                      to={`/palette-details`}
                      state={{ palette: colorSet, paletteTitle: palette.title }} // Usa 'state' de React Router v6
                      className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                      Ver Paleta
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PaletteSuggestions;
