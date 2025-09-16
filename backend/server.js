const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

const FILE_LIVRES = './livres.json';
const FILE_TODOS = './todo.json';

app.use(cors());
app.use(bodyParser.json());

// --- GESTION LIVRES ---
app.get('/livres', (req, res) => {
    fs.readFile(FILE_LIVRES, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de lecture du fichier livres.' });
        }
        res.json(JSON.parse(data));
    });
});

app.post('/livres', (req, res) => {
    const livres = req.body;
    fs.writeFile(FILE_LIVRES, JSON.stringify(livres, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: 'Erreur d\'écriture dans le fichier livres.' });
        }
        res.json({ message: 'Données livres enregistrées.' });
    });
});

// --- GESTION TÂCHES (TODO) ---
app.get('/todos', (req, res) => {
    fs.readFile(FILE_TODOS, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de lecture du fichier todo.' });
        }
        res.json(JSON.parse(data));
    });
});

app.post('/todos', (req, res) => {
    const todos = req.body;
    fs.writeFile(FILE_TODOS, JSON.stringify(todos, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: 'Erreur d\'écriture dans le fichier todo.' });
        }
        res.json({ message: 'Tâches enregistrées.' });
    });
});

app.listen(PORT, () => {
    console.log(`Serveur sur http://localhost:${PORT}`);
});
