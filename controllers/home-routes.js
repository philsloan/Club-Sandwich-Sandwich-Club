const router = require("express").Router();
const { User, Rating, Sandwich } = require("../models");
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {
  console.log("getRoute");
  try {
    const ratingDbList = await Rating.findAll({
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Sandwich,
        },
      ],
      limit: 3,
      attributes: {
        include: [
          [
            sequelize.literal(
              "(SELECT AVG(rating) FROM ratings WHERE ratings.sandwich_id = Sandwich.id)"
            ),
            "avgRating",
          ],
        ],
      },
      order: [[sequelize.literal("avgRating"), "DESC"]],
    });

    const ratingsList = ratingDbList.map((rating) => rating.get({ plain: true }));
    res.render("homepage", { ratingsList });
    // res.status(200).json(ratingDbList)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
}
);


router.get("/signup", async (req, res) => {
  res.render("signup");
}
);


module.exports = router;







