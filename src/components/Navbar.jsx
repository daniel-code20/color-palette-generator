function Navbar() {
  return (
    <nav className="bg-white px-4 py-4 fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">ColorGen</div>
        <ul className="flex space-x-6 text-black">
          <li><a href="/">Inicio</a></li>
          <li><a href="/palette-generator">Generador</a></li>
          <li><a href="#footer">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
