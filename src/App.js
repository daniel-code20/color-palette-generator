import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PaletteGenerator from "./components/PaletteGenerator";
import PaletteSuggestions from "./components/PaletteSuggestions";
import Footer from "./components/Footer";
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PaletteGenerator />
      <PaletteSuggestions />
      <Footer />
    </div>
  );
}

export default App;
