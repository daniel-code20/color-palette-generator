import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await fetch("http://colormind.io/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener datos de Colormind API" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
