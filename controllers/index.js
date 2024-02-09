const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const sandwichRoutes = require('./api/sandwich-routes');
const userRoutes = require('./api/user-routes');
const ratingRoutes = require('./api/rating-routes');



// Routes
router.use('/', homeRoutes);
app.use('/api/sandwiches', sandwichRoutes);
app.use('/api/users', userRoutes);
app.use('/api/ratings', ratingRoutes);

module.exports= router