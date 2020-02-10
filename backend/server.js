const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./router.js');

const app = express();

mongoose.connect("mongodb+srv://<username>:<password>@cluster0-izgjb.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);

