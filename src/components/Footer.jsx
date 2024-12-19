import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer" className="bg-gray-100 text-blue-950 text-center p-4">
      <p className="mb-2">
        Creado con cariño por <span className="font-semibold">Daniel Tejada</span> 💖
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.linkedin.com/in/daniel-tejada-6ab063237/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-950 hover:text-blue-900 transition-colors hover:scale-105"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/daniel-code20"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-950 hover:text-blue-900 transition-colors hover:scale-105"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
