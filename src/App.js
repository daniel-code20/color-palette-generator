import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PaletteGenerator from "./components/PaletteGenerator";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PaletteGenerator />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
