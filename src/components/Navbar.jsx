function Navbar() {
    return (
      <nav className="bg-gray-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">ColorGen</div>
          <ul className="flex space-x-4 text-white">
            <li><a href="/">Inicio</a></li>
            <li><a href="#generator">Generador</a></li>
            <li><a href="#footer">Contacto</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  