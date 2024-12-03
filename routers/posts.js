const express = require("express");
const router = express.Router();

const posts = require("../data/post");

router.get("/", (req, res) => {
    const postsName = req.query.name;
    const counter = posts.length;
    const response = {
        conteggio: counter,
        data: [...posts]
    };

    if (postsName) {
        response.data = posts.filter((post) => post.name.toLowerCase().includes(postsName.toLowerCase())
        );
        if (response.posts.length < 1) {
            res.status(404);
            response = {
                error: 404,
                message: "Non ci sono posts per la tua ricerca",
            };
        }
    }
    res.json(response);
});

router.get("/:id", (req, res) => {

});

router.post("/", (req, res) => {
    res.send("Creazione nuovo post");
});

router.put("/", (req, res) => {
    res.send("Modifica integrale del post");
});

router.patch("/", (req, res) => {
    res.send("Modifica parziale del post");
});

router.delete("/", (req, res) => {
    res.send("Cancellazione del post");
});

module.exports = router;