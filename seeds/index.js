const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedSandwiches = require('./sandwichData');
const seedRatings = require('./ratingData');


const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedSandwiches();

  await seedRatings();

  process.exit(0);
};

seedAll();
