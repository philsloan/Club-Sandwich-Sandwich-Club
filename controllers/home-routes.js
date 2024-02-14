const router = require("express").Router();
const { User, Rating, Sandwich } = require("../models");
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {
  console.log("getRoute");
  try {
    const ratingDbList = await Sandwich.findAll({
      attributes: [
        "id",
        "name",
        "bread",
        "condiment",
        "meat",
        "vegetable",
        "cheese",
        "other",
        "image_link",
        [sequelize.literal("(SELECT AVG(rating) FROM ratings WHERE sandwich_id = sandwiches.id)"), "avgRating"],
      ],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
      order: [[sequelize.literal("avgRating"), "DESC"]],
      limit: 3,
    });
    const ratingsList = ratingDbList.map((rating) => rating.get({ plain: true }));
    res.render("homepage", { ratingsList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
