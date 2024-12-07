const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // Necesita instalación si usas Node 18 o menor

const app = express();
const PORT = 5000;

app.use(cors()); // Permitir todas las solicitudes CORS

app.use(express.json()); // Middleware para leer JSON en solicitudes

app.post("/api/palette", async (req, res) => {
  try {
    const response = await fetch("http://colormind.io/api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    res.json(data); // Enviar los datos a la app frontend
  } catch (error) {
    res.status(500).json({ error: "Error al obtener datos de Colormind API" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server listening on port ${PORT}`);
});
