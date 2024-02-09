// Import any necessary modules or dependencies here
const express = require('express');
const router = express.Router();
const UserController = require('./user-routes');

// Route for user login
router.post('/login', UserController.login);

// Route for user registration
router.post('/register', UserController.register);

module.exports = router;

// Placeholder user data (you'll replace this with your database interactions)
let users = [];

module.exports = {
  // Controller function for user login
  login: (req, res) => {
    const { email } = req.body;
    
    // Check if user with provided email exists
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    // Return user data or authentication token
    return res.status(200).json({ user });
  },

  // Controller function for user registration
  register: (req, res) => {
    const { email, 
      favoriteSandwich, 
      bread,
      condiment,
      meat,
      vegetable,
      cheese,
      other } = req.body;
    
    // Validate user input (you can add more validation as needed)
    if (!email || !favoriteSandwich || !bread || !condiment || !meat || !vegetable || !cheese || !other ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // Check if user already exists
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }
    
    // Create new user object
    const newUser = {
      email,
      favoriteSandwich,
      bread,
      condiment,
      meat,
      vegetable,
      cheese,
      other
    };
    
    // Add new user to the list
    users.push(newUser);
    
    // Return success response
    return res.status(201).json({ message: 'User registered successfully' });
  }
};



