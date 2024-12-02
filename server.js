const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Server del mio blog")
});

const posts = [
    {
        titolo: 'Ciambellone',
        contenuto: 'Questo è il contenuto del primo post.',
        immagine: '/images/ciambellone.jpeg',
        tags: ['tag1', 'tag2', 'tag3']
    },
    {
        titolo: 'Cracker',
        contenuto: 'Questo è il contenuto del secondo post.',
        immagine: '/images/craker_barbabietola.jpeg',
        tags: ['tag4', 'tag5', 'tag6']
    },
    {
        titolo: 'Pane fritto',
        contenuto: 'Questo è il contenuto del terzo post.',
        immagine: '/images/pane_fritto_dolce.jpeg',
        tags: ['tag7', 'tag8', 'tag9']
    },
    {
        titolo: 'Pasta',
        contenuto: 'Questo è il contenuto del quarto post.',
        immagine: '/images/pasta_barbabietola.jpeg',
        tags: ['tag10', 'tag11', 'tag12']
    },
    {
        titolo: 'Torta',
        contenuto: 'Questo è il contenuto del quinto post.',
        immagine: '/images/torta_paesana.jpeg',
        tags: ['tag13', 'tag14', 'tag15']
    }
];

app.get("/bacheca", (req, res) => {
    const counter = posts.length;
    const response = {
        conteggio: counter,
        posts: posts
    };
    res.json(response);
});

app.get("/ciambellone", (req, res) => {
    res.send('<img src="/images/ciambellone.jpeg"')
});

app.get("/cracker", (req, res) => {
    res.send('<img src="/images/cracker_barbabietola.jpeg"')
});

app.get("/pane", (req, res) => {
    res.send('<img src="/images/pane_fritto_dolce.jpeg"')
});

app.get("/pasta", (req, res) => {
    res.send('<img src="/images/pasta_barbabietola.jpeg"')
});

app.get("/torta", (req, res) => {
    res.send('<img src="/images/torta_paesana.jpeg"')
});



app.all("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not Found !</h1>");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});