const router = require('express').Router();
const {Rating} = require('../../models');


// GET all ratings
router.get("/", async (req, res) => {
  try {
    const dbRatingsData = await Rating.findAll({});

    const ratingsData = dbRatingsData.map((rating) => rating.get({ plain: true }));

    res.status(200).json(ratingsData)
  } catch (err) {
    res.status(500).json(err);
  }
});


// Route for rating a sandwich
router.post('/:id', async (req, res) => {
  const sandwichId = parseInt(req.params.id);
  if (sandwichId) {
    try {
      const dbRatingData = await Rating.create({
       rating: req.body.value,
       user_id: req.body.raterId,
       sandwich_id: parseInt(req.params.id),
      });
      res.status(200).json(dbRatingData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }     
  } else {
    res.status(500).json({message: "Not a valid sandwich ID"})
  }
});

// Route for updating a rating
router.put("/:id", async (req, res) => {
  try {
    const ratingData = await Rating.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!ratingData) {
      res.status(404).json({ message: "No rating found with that id!" });
      return;
    }
    res.status(200).json(ratingData);
  } catch (err) {
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


