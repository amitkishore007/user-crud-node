const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./src/routes/routes');
const app = express();

mongoose.connect('mongodb://localhost/nested_docs', {
    useNewUrlParser: true
});

app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
routes(app);
app.use((errors, req, res, next)=>{
    //send back the errors produced
    res.status(422).send({
        status: 'failed',
        errors: errors.errors
    });
});

module.exports = app;
