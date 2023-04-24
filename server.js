const http = require('http');
const express = require('express');
const logger = require('morgan');
const debug = require('debug')('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/dbconnect');
const indexRouter = require('./routes/index.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/', indexRouter);

const server = http.createServer(app);

dbConnect(process.env.DATABASE_URL);

server.listen(PORT, () => {
  debug(`Listening on ${PORT}`);
});

module.exports = app;
