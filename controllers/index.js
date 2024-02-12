const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const api = require("./api");
const sandwichRoute = require("./sandwich-routes.js");

// Routes
router.use('/', homeRoutes);
router.use('/api', api);
router.use('/sandwich', sandwichRoute);


module.exports= router