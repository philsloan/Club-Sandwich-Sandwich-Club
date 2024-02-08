const express = require('express');
const router = express.Router();
const UserController = require('./user-routes');
const SandwichController = require('./sandwich-routes');
const RatingController = require('./rating-routes');

// User Routes
router.post('/users/login', UserController.login); // User login route
router.post('/users/register', UserController.register); // User registration route

// Sandwich Routes
router.post('/sandwiches', SandwichController.create); // Create a new sandwich
router.get('/sandwiches/:id', SandwichController.get); // Get details of a specific sandwich

// Rating Routes
router.post('/ratings/sandwich/:id', RatingController.rate); // Rate a sandwich

module.exports = router;

