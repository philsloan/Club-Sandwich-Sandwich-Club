const router = require('express').Router();
const UserController = require('./user-routes');
const SandwichController = require('./sandwich-routes');
const RatingController = require('./rating-routes');

router.use('/sandwiches', SandwichController);
router.use('/users', UserController);
router.use('/ratings', RatingController);


module.exports = router;

