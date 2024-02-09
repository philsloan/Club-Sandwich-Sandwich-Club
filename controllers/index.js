const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const api = require("./api");

// Routes
router.use('/', homeRoutes);
router.use('/api', api);

module.exports= router