// Import any necessary modules or dependencies here
const express = require('express');
const router = express.Router();
const SandwichController = require('./sandwich-routes');

// Route for creating a new sandwich
router.post('/sandwich', SandwichController.create);

// Route for getting details of a specific sandwich
router.get('/sandwich/:id', SandwichController.get);

module.exports = router;


// Placeholder data (you'll replace this with your database interactions)
let sandwiches = [];

module.exports = {
  // Controller function for creating a new sandwich
  create: (req, res) => {
    const { name, bread, condiment, meat, vegetable, cheese, other } = req.body;
    
    // Validate input
    if (!name || !bread || !condiment || !meat || !vegetable || !cheese || !other) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Create new sandwich object
    const newSandwich = {
      id: sandwiches.length + 1, // Placeholder for generating unique ID (you may use UUID or auto-increment in MySQL)
      name,
      ingredients: {
        bread,
        condiment,
        meat,
        vegetable,
        cheese,
        other
      },
      rating: null // Placeholder for rating (will be updated later)
    };
    
    // Add new sandwich to the list
    sandwiches.push(newSandwich);
    
    // Return success response
    return res.status(201).json({ message: 'Sandwich created successfully', sandwich: newSandwich });
  },



  // Controller function for getting details of a specific sandwich
  get: (req, res) => {
    const { id } = req.params;
    
    // Find the sandwich by ID
    const sandwich = sandwiches.find(s => s.id == id);
    if (!sandwich) {
      return res.status(404).json({ error: 'Sandwich not found' });
    }
    
    // Return sandwich details
    return res.status(200).json({ sandwich });
  }
};
