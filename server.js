const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let highScores = [];

/* ROOT */
app.get("/", (req, res) => {
    res.send("Tricode API funcionando 🚀");
});

/* GUARDAR SCORE */
app.post("/score", (req, res) => {
    const { player, score } = req.body;

    if (!player || score == null) {
        return res.status(400).json({ error: "Datos inválidos" });
    }

    highScores.push({ player, score });

    highScores.sort((a, b) => b.score - a.score);

    highScores = highScores.slice(0, 10);

    res.json({ message: "Score guardado", highScores });
});

/* OBTENER SCORES */
app.get("/scores", (req, res) => {
    res.json(highScores);
});

/* HEALTH CHECK (DevOps) */
app.get("/health", (req, res) => {
    res.json({ status: "OK", uptime: process.uptime() });
});

/* SERVER */
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});