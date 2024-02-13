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
    image_link: 'https://s7d1.scene7.com/is/image/mcdonalds/Header_BigMac_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off',
    user_id: 1,
  },
  {
    name: 'Reuben',
    bread: 'Rye bread',
    condiment: 'Russian dressing',
    meat: 'Sliced Corn Beef',
    vegetable: 'Onions',
    cheese: 'Swiss',
    other: 'Sauerkraut',
    image_link: 'https://www.allrecipes.com/thmb/cgml1FAsWqEN-srKxS_CtkplvFQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/47717-reuben-sandwich-ii-mike-phillips-b77c676e6aaf45e280d34e0c668d8f2f.jpeg',
    user_id: 2,
  },
  {
    name: 'Grilled Cheese',
    bread: 'White bread',
    condiment: 'Butter',
    meat: '',
    vegetable: '',
    cheese: 'American',
    other: '',
    image_link: 'https://static01.nyt.com/images/2023/02/28/multimedia/ep-air-fryer-grilled-cheese-vpmf/ep-air-fryer-grilled-cheese-vpmf-superJumbo.jpg',
    user_id: 3,
  },
  {
    name: 'Club Sandwich',
    bread: 'Toasted White bread',
    condiment: 'Mayo',
    meat: 'Turkey & Bacon',
    vegetable: 'Lettuce & Tomato',
    cheese: '',
    other: 'Optional avocado',
    image_link: 'https://www.foodandwine.com/thmb/tM060YA0Fd0UALCmPQ-5gGWyBqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg',
    user_id: 4,
  },
]

const seedSandwiches = () => Sandwich.bulkCreate(sandwichdata);

module.exports = seedSandwiches;