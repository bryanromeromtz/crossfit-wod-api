const express = require('express');
const router = express.Router();



router.route('/')
    .get((req, res) => {
        res.send(`<h1>Hello desde ${req.originalUrl}</h1>`);
    });

module.exports = router;