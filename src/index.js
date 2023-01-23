const dotenv = require('dotenv');
dotenv.config();

// require express app
require('./config/app');

// require db
const db = require('./config/db');
db();
