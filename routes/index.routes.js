const express = require('express');

const indexRouter = express.Router();

const adminRouter = require('./staff/admin.routes');

indexRouter.use('/admin/', adminRouter);

module.exports = indexRouter;
