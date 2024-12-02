const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
});

const posts = [
    {
        titolo: 'Post 1',
        contenuto: 'Questo è il contenuto del primo post.',
        immagine: 'https://via.placeholder.com/150',
        tags: ['javascript', 'node.js', 'express']
    },
    {
        titolo: 'Post 2',
        contenuto: 'Questo è il contenuto del secondo post.',
        immagine: 'https://via.placeholder.com/150',
        tags: ['html', 'css', 'frontend']
    },
    {
        titolo: 'Post 3',
        contenuto: 'Questo è il contenuto del terzo post.',
        immagine: 'https://via.placeholder.com/150',
        tags: ['backend', 'api', 'rest']
    },
    {
        titolo: 'Post 4',
        contenuto: 'Questo è il contenuto del quarto post.',
        immagine: 'https://via.placeholder.com/150',
        tags: ['express', 'middleware', 'web']
    },
    {
        titolo: 'Post 5',
        contenuto: 'Questo è il contenuto del quinto post.',
        immagine: 'https://via.placeholder.com/150',
        tags: ['node', 'mongodb', 'database']
    }
];

app.get("/posts", (req, res) => {
    res.json(posts);
})



app.all("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not Found !</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});