const express = require('express');
const fetch = require('isomorphic-fetch');
const path = require('path');
const cvController = require('./controllers/cv-controller.js');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, '../public')));

// add your routes here :)
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  cvController.getData(userName,res);
});

app.listen(4000);

module.exports = app;
