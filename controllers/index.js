const router = require('express').Router();
// const bodyParser = require('body-parser');
const homeRoutes = require('./home-routes.js');
// const sandwichRoutes = require('./controller/api/sandwich-routes');
// const userRoutes = require('./controller/api/user-routes');
// const ratingRoutes = require('./controller/api/rating-routes');



// Middleware
// app.use(bodyParser.json());

// Routes
router.use('/', homeRoutes);
// app.use('/api/sandwiches', sandwich-routes);
// app.use('/api/users', user-routes);
// app.use('/api/ratings', rating-routes);

module.exports= router