import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import PaletteDetails from "../pages/PaletteDetails";

function AppRoutes() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/palette-details" element={<PaletteDetails />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
