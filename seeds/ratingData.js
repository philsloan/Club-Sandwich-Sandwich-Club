const { Rating } = require('../models');

const ratingdata = [
  {
    rating: 3,
    sandwich_id: 1,
    user_id: 4,
  },
  {
    rating: 5,
    sandwich_id: 1,
    user_id: 3,
  },
  {
    rating: 2,
    sandwich_id: 2,
    user_id: 3,
  },
  {
    rating: 1,
    sandwich_id: 2,
    user_id: 1,
  },
  {
    rating: 4,
    sandwich_id: 3,
    user_id: 2,
  },
  {
    rating: 4,
    sandwich_id: 3,
    user_id: 1,
  },
  {
    rating: 4,
    sandwich_id: 4,
    user_id: 1,
  },
  {
    rating: 5,
    sandwich_id: 4,
    user_id: 3,
  },
];

const seedRatings = () => Rating.bulkCreate(ratingdata);

module.exports = seedRatings;