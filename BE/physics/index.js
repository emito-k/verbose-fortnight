const express = require('express');
const app = express();
const equations = require('./force');
const force = equations.force;

app.get('/:m/:a', (req, res) => {
    res.send(force(Number(req.params.m), Number(req.params.a)).toString());
});

app.listen(8081, () => {
    console.log('This is running on port 8081');
});

