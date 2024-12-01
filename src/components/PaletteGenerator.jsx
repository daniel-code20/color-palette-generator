function PaletteGenerator() {
    return (
      <section id="generator" className="p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Generador de Paletas</h2>
        <div className="flex flex-col items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4">Subir Imagen</button>
          <div className="grid grid-cols-5 gap-4">
            {/* Aquí aparecerán los colores generados */}
            <div className="w-16 h-16 bg-red-500 rounded-lg"></div>
            <div className="w-16 h-16 bg-green-500 rounded-lg"></div>
            <div className="w-16 h-16 bg-blue-500 rounded-lg"></div>
            <div className="w-16 h-16 bg-yellow-500 rounded-lg"></div>
            <div className="w-16 h-16 bg-purple-500 rounded-lg"></div>
          </div>
        </div>
      </section>
    );
  }
  
  export default PaletteGenerator;
  