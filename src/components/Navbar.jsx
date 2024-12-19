import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para determinar si el enlace es el activo
  const isActive = (path) => {
    return location.pathname === path
      ? 'bg-blue-950 text-white'
      : 'bg-transparent text-black hover:bg-gray-200';
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white px-4 py-4 fixed top-4 left-0 right-0 z-10 shadow-lg rounded-full transition-all duration-300 ease-in-out w-full max-w-6xl mx-auto">
      <div className="flex items-center justify-between">
        {/* Contenedor logo */}
        <div className="flex items-center text-2xl font-bold">
          <span className="mr-2 text-3xl">🎨</span>
          <Link
            to="/"
            className="bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text"
          >
            ColorGen
          </Link>
        </div>

        {/* Menú en pantallas grandes */}
        <ul className="hidden lg:flex items-center justify-center space-x-8 text-black w-auto">
          <li>
            <Link
              to="/"
              className={`text-md font-normal px-4 py-2 rounded-full transition-all duration-200 ${isActive('/')}`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/palette-generator"
              className={`text-md font-normal px-4 py-2 rounded-full transition-all duration-200 ${isActive('/palette-generator')}`}
            >
              Generador
            </Link>
          </li>
          
        </ul>

        {/* Botón de menú hamburguesa */}
        <div className="lg:hidden" onClick={toggleMenu}>
          <button className="text-2xl">
            {isMenuOpen ? '' : '☰'}
          </button>
        </div>
      </div>

      {/* Overlay que oscurece el contenido */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      ></div>

      {/* Sidebar a la derecha */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
      >
        {/* Botón de cerrar dentro del sidebar */}
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-2xl">
            ❌
          </button>
        </div>

        <ul className="flex flex-col space-y-6 p-6 text-black">
          <li>
            <Link
              to="/"
              className={`text-md font-normal px-4 py-2 rounded-full transition-all duration-200 ${isActive('/')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/palette-generator"
              className={`text-md font-normal px-4 py-2 rounded-full transition-all duration-200 ${isActive('/palette-generator')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Generador
            </Link>
          </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
