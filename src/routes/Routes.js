import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import PaletteDetails from "../pages/PaletteDetails";
import Generator from "../pages/Generator";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/palette-details" element={<PaletteDetails />} />
        <Route path="/palette-generator" element={<Generator />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
