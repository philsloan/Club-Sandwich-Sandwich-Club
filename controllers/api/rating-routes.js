const router = require('express').Router();
const {Rating} = require('../../models');

// Route for rating a sandwich
router.post('/:id', async (req, res) => {
  try {
    const dbRatingData = await Rating.create({
     rating: req.body.rating,
     user_id: req.body.user_id,
     sandwich_id: parseInt(req.params.id),
    });
    res.status(200).json(dbRatingData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  } 
});

router.delete("/:id", async (req, res) => {
  try {
    const dbRatingData = await Rating.destroy({
      where: {
        id: req.params.id, 
      }, 
    }) 
    if (!dbRatingData) {
      res.status(404).json({message: "There is no rating found with that id"});
      return;
    }
    res.status(200).json(dbRatingData);
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;


