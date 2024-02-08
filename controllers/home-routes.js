const router = require('express').Router();


// Define your home routes here
router.get('/', (req, res) => {
  // res.send('Welcome to the Club Sandwich Sandwich Club!');
  res.render("homepage")
});

module.exports = router;
