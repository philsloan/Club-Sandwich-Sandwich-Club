const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const api = require("./api")
// const sandwichRoutes = require('./api/sandwich-routes');
// const userRoutes = require('./api/user-routes');
// const ratingRoutes = require('./api/rating-routes');



// Routes
router.use('/', homeRoutes);
// app.use('/api/sandwiches', sandwichRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/ratings', ratingRoutes);
app.use('/api', api);
module.exports= router