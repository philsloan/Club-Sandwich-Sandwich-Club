const { User } = require('../models');

const userdata = [
  {
    username: 'Kevin',
    email: 'kchogan@pacbell.net',
    password: 'Kevin',
  },
  {
    username: 'Manny',
    email: 'mannysingh0829@gmail.com',
    password: 'Manny',
  },
  {
    username: 'Phil',
    email: 'Pjs.tgj@gmail.com',
    password: 'Phil',
  },
  {
    username: 'Ashley',
    email: 'paluzziashley@gmail.com',
    password: 'Ashley',
  }, 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;