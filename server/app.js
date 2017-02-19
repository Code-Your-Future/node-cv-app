const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');
const controler = require('./controllers/cv-controller.js');

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.cwd(), 'public')));

// add your routes here :)
app.get('/', (req, res) => {
  const name = req.query.name;
  controler.getUser(name, res);
});
app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  controler.getPullRequest(name, res);
});
app.listen(4000);

module.exports = app;
