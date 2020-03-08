const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Index Router
 */
const indexRouter = require('./routes/index');
app.use('/api/url', indexRouter);

/**
 * Main Router
 */
const mainRouter = require('./routes/main');
app.use('/', mainRouter);

/**
 * Establish connection with database
 */
require('./db/db');

module.exports = app;
