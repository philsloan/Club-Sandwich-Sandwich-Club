const { User } = require('../models');

const userdata = [
  {
    username: 'Kevin',
    email: 'kchogan@pacbell.net',
  },
  {
    username: 'Manny',
    email: 'mannysingh0829@gmail.com',
  },
  {
    username: 'Phil',
    email: 'Pjs.tgj@gmail.com',
  },
  {
    username: 'Ashley',
    email: 'paluzziashley@gmail.com',
  }, 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;