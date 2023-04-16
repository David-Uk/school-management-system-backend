const http = require('http');
const express = require('express');
const logger = require('morgan');
const debug = require('debug')('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);

server.listen(PORT, () => {
    debug(`Listening on ${PORT}`);
});

module.exports = app;
