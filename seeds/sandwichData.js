const { Sandwich } = require('../models');

const sandwichdata = [
  {
    name: 'Cheeseburger',
    bread: 'Sesame Seed Bun',
    condiment: 'Special Sauce',
    meat: '2 All-beef patties',
    vegetable: 'Lettuce, pickles & onions',
    cheese: 'American',
    other: '',
    user_id: 1,
  },
  {
    name: 'Reuben',
    bread: 'Rye',
    condiment: 'Russian dressing',
    meat: 'Sliced Corn Beef',
    vegetable: 'Onions',
    cheese: 'Swiss',
    other: 'Sauerkraut',
    user_id: 2,
  },
  {
    name: 'Grilled Cheese',
    bread: 'White',
    condiment: 'Butter',
    meat: '',
    vegetable: '',
    cheese: 'American',
    other: '',
    user_id: 3,
  },
  {
    name: 'Club Sandwich',
    bread: 'Toasted White',
    condiment: 'Mayo',
    meat: 'Turkey & Bacon',
    vegetable: 'Lettuce & Tomato',
    cheese: '',
    other: 'Optional avocado',
    user_id: 4,
  },
]

const seedSandwiches = () => Sandwich.bulkCreate(sandwichdata);

module.exports = seedSandwiches;