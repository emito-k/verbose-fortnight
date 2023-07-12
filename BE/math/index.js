const express = require('express');
const app = express();
const add = require('./add');

app.get('/:x/:y', (req, res) => {
    res.send(add(Number(req.params.x), Number(req.params.y)).toString());
});

app.listen(8080, () => {
    console.log('Running on port 8080');
});
