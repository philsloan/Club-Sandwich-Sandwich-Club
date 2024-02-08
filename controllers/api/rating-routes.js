// Import any necessary modules or dependencies here
const express = require('express');
const router = express.Router();
const RatingController = require('./rating-routes');

// Route for rating a sandwich
router.post('/sandwich/:id/rate', RatingController.rate);

module.exports = router;


// Placeholder data (you'll replace this with your database interactions)
let sandwiches = [];

module.exports = {
  // Controller function for rating a sandwich
  rate: (req, res) => {
    const { id } = req.params;
    const { rating } = req.body;
    
    // Check if the provided sandwich ID is valid
    const sandwich = sandwiches.find(s => s.id === id);
    if (!sandwich) {
      return res.status(404).json({ error: 'Sandwich not found' });
    }

    // Validate rating value
    if (rating < 1 || rating > 10) {
      return res.status(400).json({ error: 'Invalid rating value. Rating must be between 1 and 10.' });
    }

    // Update the rating of the sandwich
    sandwich.rating = rating;

    // Return success response
    return res.status(200).json({ message: 'Rating updated successfully' });
  }
};
