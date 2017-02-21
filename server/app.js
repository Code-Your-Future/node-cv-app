const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');
const controler = require('./controllers/cv-controller');

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', controler.userProfile);

app.listen(4000);

module.exports = app;
