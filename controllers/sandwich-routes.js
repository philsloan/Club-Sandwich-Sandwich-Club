const router = require("express").Router();
const fields = require("../utils/sandwichFields");
const { Sandwich, Rating, User } = require("../models");
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {
  const sammichData = await Sandwich.findAll().catch((err) => {
    res.json(err);
  });
  res.json(sammichData);
});

router.get("/allSandwiches", async (req, res) => {
  if (req.session.logged_in) {
    try {
      const rawSandwichData = await Sandwich.findAll({
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
          "user_id",
          [sequelize.literal("(SELECT AVG(rating) FROM ratings WHERE sandwich_id = sandwiches.id)"), "avgRating"],
        ],          
        order: [["avgRating", "DESC"]],
      });
      const sandwichArray = rawSandwichData.map((sandwich) =>
        sandwich.get({ plain: true })
      );
      const userRatingData = await Rating.findAll({
        where: { user_id: req.session.user_id },
        order: [["sandwich_id", "ASC"]],
      });
      const userSandwich = userRatingData.map((sandwich) =>
        sandwich.get({ plain: true })
      );
      const sandwichRating = sandwichArray.map((sandwich) => {
        for (let i = 0; i < userSandwich.length; i++) {
          if (sandwich.id === userSandwich[i].sandwich_id) {
            sandwich.userRating = userSandwich[i].rating;
            return sandwich;
          }
        }
        sandwich.userRating = 0;
        return sandwich;
      });

      res.render("allSandwiches", {
        sandwichRating,
        loggedIn: req.session.logged_in,
        raterId: req.session.user_id,
      });
    } catch (error) {
      console.error("Error fetching sandwiches:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/search", async (req, res) => {
  if (req.session.logged_in) {
    try {
      const searchTerm = req.query.term.toLowerCase();
      console.log("Search Term:", searchTerm);
      const sandwich = await Sandwich.findOne({
        where: { name: searchTerm },
        include: [{ model: Rating }, { model: User }],
      });

      if (sandwich) {
        const cleanSandwich = sandwich.get({ plain: true });
        cleanSandwich.userRating = 0;
        for (let i = 0; i < cleanSandwich.ratings.length; i++) {
          if (cleanSandwich.ratings[i].user_id == req.session.user_id) {
            cleanSandwich.userRating = cleanSandwich.ratings[i].rating;
            break;
          }
        }
        if (cleanSandwich.user_id === req.session.user_id) {
          fields[0].value = cleanSandwich.name;
          fields[1].value = cleanSandwich.bread;
          fields[2].value = cleanSandwich.condiment;
          fields[3].value = cleanSandwich.meat;
          fields[4].value = cleanSandwich.vegetable;
          fields[5].value = cleanSandwich.cheese;
          fields[6].value = cleanSandwich.other;
          if (cleanSandwich.image_link === "../images/no-sandwich-image.jpg") {
            fields[7].value = "";
          } else {
            fields[7].value = cleanSandwich.image_link;
          }
          res.render("updateSandwich", {
            fields,
            sandwichId: cleanSandwich.id,
            loggedIn: req.session.logged_in,
            raterId: req.session.user_id,
          });
        } else {
          res.render("sandwich", {
            sandwich: cleanSandwich,
            loggedIn: req.session.logged_in,
            raterId: req.session.user_id,
          });
        }
      } else {
        res.render("sandwich", {
          message: "No sandwich found for the given term.",
        });
      }
    } catch (error) {
      console.error("Error searching for sandwich:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/newSandwich", async (req, res) => {
  if (req.session.logged_in) {
    res.render("newSandwich", {
      fields,
      userId: req.session.user_id,
      loggedIn: req.session.logged_in,
    });
  } else {
    res.redirect("/login");
  }
});

router.get("/:id", async (req, res) => {
  if (req.session.logged_in) {
    try {
      const rawSandwichData = await Sandwich.findByPk(req.params.id, {
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
          "user_id",
          [sequelize.literal("(SELECT AVG(rating) FROM ratings WHERE sandwich_id = sandwiches.id)"), "avgRating"],
        ],        
        include: [{ model: Rating }, { model: User }],
      });
      const sandwichData = rawSandwichData.get({ plain: true });
      sandwichData.userRating = 0;
      for (let i = 0; i < sandwichData.ratings.length; i++) {
        if (sandwichData.ratings[i].user_id == req.session.user_id) {
          sandwichData.userRating = sandwichData.ratings[i].rating;
          break;
        }
      }
      // res.status(200).json(sandwichData);
      if (sandwichData.user_id === req.session.user_id) {
        fields[0].value = sandwichData.name;
        fields[1].value = sandwichData.bread;
        fields[2].value = sandwichData.condiment;
        fields[3].value = sandwichData.meat;
        fields[4].value = sandwichData.vegetable;
        fields[5].value = sandwichData.cheese;
        fields[6].value = sandwichData.other;
        if (sandwichData.image_link === "../images/no-sandwich-image.jpg") {
          fields[7].value = "";
        } else {
          fields[7].value = sandwichData.image_link;
        }
        res.render("updateSandwich", {
          fields,
          sandwichId: sandwichData.id,
          loggedIn: req.session.logged_in,
          raterId: req.session.user_id,
        });
      } else {
        res.render("sandwich", {
          sandwich: sandwichData,
          loggedIn: req.session.logged_in,
          raterId: req.session.user_id,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  } else {
    res.redirect("/login");
  }
});

module.exports = router;
