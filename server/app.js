const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');
const controller = require('./controllers/cv-controller');
const error = require('./middleware/errors');

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.cwd(), 'public')));

// add your routes here :)

app.get('/users/:username', controller);
app.get('/users/:username/events/public', controller);

app.use(error.catch404Error);

app.listen(4000);


module.exports = app;
