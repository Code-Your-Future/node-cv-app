const express = require('express');
const path = require('path');
const controler = require('./controllers/cv-controller');
const error = require('./middleware/errors');

const app = express();

// view engine setup
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/', controler.route1);
// catch 404 and forward to error handleer
app.use(error.catch404Error);
//error handler
app.use(error.handleError);

app.listen(4000);

module.exports = app;
