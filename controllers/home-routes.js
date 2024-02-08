const express = require('express');
const bodyParser = require('body-parser');
const homeRoutes = require('./controller/home-routes');
const sandwichRoutes = require('./controller/api/sandwich-routes');
const userRoutes = require('./controller/api/user-routes');
const ratingRoutes = require('./controller/api/rating-routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/', home-routes);
app.use('/api/sandwiches', sandwich-routes);
app.use('/api/users', user-routes);
app.use('/api/ratings', rating-routes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
