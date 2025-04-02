const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json()); // Pour lire les requêtes JSON

// Route de test
app.get("/", (req, res) => {
    res.send("API Backend fonctionne !");
});

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur backend démarré sur http://localhost:${PORT}`));
