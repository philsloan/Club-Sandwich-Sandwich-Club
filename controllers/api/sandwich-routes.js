const router = require('express').Router();
const {Sandwich} = require("../../models");
// Route for creating a new sandwich
router.post('/', async (req, res) => {
  console.log("Adding a new sandwich to the db!")
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







