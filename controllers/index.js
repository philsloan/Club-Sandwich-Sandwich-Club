const express = require('express');
const router = express.Router();

// Define your home routes here
router.get('/', (req, res) => {
  res.send('Welcome to the Club Sandwich Sandwich Club!');
});

module.exports = router;
