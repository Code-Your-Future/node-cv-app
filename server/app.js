const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');

const cvController = require('./controllers/cv-controller');

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/users/:username', cvController);
app.get('/users/:username/events/public', cvController);

app.listen(4000);

module.exports = app;
