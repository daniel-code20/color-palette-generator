import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PaletteGenerator from "./components/PaletteGenerator";
import PaletteSuggestions from "./components/PaletteSuggestions";
import Footer from "./components/Footer";
import './styles.css';
import RandomPalette from "./components/RandomPalette";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <PaletteGenerator />
      <RandomPalette/>
      <PaletteSuggestions />
      <Footer />
    </div>
  );
}

export default App;
