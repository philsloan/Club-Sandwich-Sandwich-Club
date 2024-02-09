// Import any necessary modules or dependencies here
const router = require('express').Router();
const {Sandwich, User, Rating} = require("../../models");
// Route for creating a new sandwich
router.post('/', async (req, res) => {
  try {
    const dbSandwichData = await Sandwich.create({
      name: req.body.name, 
      bread: req.body.bread,
      condiment: req.body.condiment,
      meat: req.body.meat,
      vegetable: req.body.vegetable,
      cheese: req.body.cheese,
      other: req.body.other,
      image_link: req.body.image_link,
      user_id: req.body.user_id,
    });
    res.status(200).json(dbSandwichData);
  } catch(err){
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const dbSandwichData = await Sandwich.destroy({
      where: {
        id: req.params.id,
      },
    })
    if (!dbSandwichData) {
      res.status(404).json({message: "No Sandwich found with that id"});
      return;
    } 
    res.status(200).json(dbSandwichData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;







// // Placeholder data (you'll replace this with your database interactions)
// let sandwiches = [];

// module.exports = {
//   // Controller function for creating a new sandwich
//   create: (req, res) => {
//     const { name, bread, condiment, meat, vegetable, cheese, other } = req.body;
    
//     // Validate input
//     if (!name || !bread || !condiment || !meat || !vegetable || !cheese || !other) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }
    
//     // Create new sandwich object
//     const newSandwich = {
//       id: sandwiches.length + 1, 
//       name,
//       ingredients: {
//         bread,
//         condiment,
//         meat,
//         vegetable,
//         cheese,
//         other
//       },
//       rating: null 
//     };
    
//     // Add new sandwich to the list
//     sandwiches.push(newSandwich);
    
//     // Return success response
//     return res.status(201).json({ message: 'Sandwich created successfully', sandwich: newSandwich });
//   },



//   // Controller function for getting details of a specific sandwich
//   get: (req, res) => {
//     const { id } = req.params;
    
//     // Find the sandwich by ID
//     const sandwich = sandwiches.find(s => s.id == id);
//     if (!sandwich) {
//       return res.status(404).json({ error: 'Sandwich not found' });
//     }
    
//     // Return sandwich details
//     return res.status(200).json({ sandwich });
//   }
// };
