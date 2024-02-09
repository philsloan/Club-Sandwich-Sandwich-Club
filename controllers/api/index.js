const router = require('express').Router();
const UserController = require('./user-routes');
const SandwichController = require('./sandwich-routes');
const RatingController = require('./rating-routes');

// // User Routes
// router.post('/users/login', UserController.login); 
// router.post('/users/register', UserController.register); 

// // Sandwich Routes
// router.post('/sandwiches', SandwichController.create); 
// router.get('/sandwiches/:id', SandwichController.get); 

// // Rating Routes
// router.post('/ratings/sandwich/:id', RatingController.rate); 
router.use('/sandwiches', SandwichController);
router.use('/users', UserController);
router.use('/ratings', RatingController);


module.exports = router;

