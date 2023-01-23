const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
//
const routes = require('../routes');

const app = express();

app.use(morgan('dev'));
app.use(cors({ origin: process.env.FRONTEND_HOST, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.use('*', (req, res, next) => {
  res.status(404).json({ message: 'The route is not defined yet' });
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log('App running on port ' + PORT);
});

module.exports = server;
