const router = require("express").Router();
const { Sandwich, Rating } = require("../models");

router.get('/', async (req, res) => {
  const sammichData = await Sandwich.findAll().catch((err) => {
    res.json(err);
  });
  res.json(sammichData);
});



router.get("/allSandwiches", async (req, res) => {
    try {
        const rawSandwichData = await Sandwich.findAll({ order: [["id", "ASC"]] });
        const sandwichArray = rawSandwichData.map((sandwich) =>
          sandwich.get({ plain: true })
        );
        const userRatingData = await Rating.findAll({
          where: { user_id: req.session.user_id},
          order: [["sandwich_id", "ASC"]],
        });
        const userSandwich = userRatingData.map((sandwich) =>
          sandwich.get({ plain: true })
        );
        const sandwichRating = sandwichArray.map((sandwich)=>{
          for (let i =0; i < userSandwich.length; i++){
            if (sandwich.id === userSandwich[i].sandwich_id){
               sandwich.userRating = userSandwich[i].rating
               return sandwich
            }
          }
          sandwich.userRating = 0;
          return sandwich;
        })

        res.render("allSandwiches", { 
            sandwichRating,
            loggedIn: req.session.logged_in,
            raterId: req.session.user_id,
         }); 
    } catch (error) {
        console.error("Error fetching sandwiches:", error);
        res.status(500).send("Internal Server Error");
    }
});


router.get("/search", async (req, res) => {
    try {
        const searchTerm = req.query.term.toLowerCase();
        console.log("Search Term:", searchTerm);
        const sandwich = await Sandwich.findOne({ where: { name: searchTerm } });
        console.log("Found Sandwich:", sandwich);
        if (sandwich) {
            const cleanSandwich = sandwich.get({ plain: true });
            res.render("sandwich", { sandwich: cleanSandwich });
        } else {
            res.render("sandwich", { message: "No sandwich found for the given term." });
        }
    } catch (error) {
        console.error("Error searching for sandwich:", error);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/newSandwich", async (req, res) => {
  const fields = [
    { 
      name: "name",
      label: "Name:",
      required: "required"
    },
    { 
      name: "bread",
      label: "Bread:",
      required: ""
    },
    {
      name: "condiment",
      label: "Condiment:",
      required: ""
    },
    {
      name: "meat",
      label: "Meat:",
      required: ""
    },
    {
      name: "vegetable",
      label: "Vegetable:",
      required: ""
    },
    {
      name: "cheese",
      label: "Cheese:",
      required: ""
    },
    {
      name: "other",
      label: "Other:",
      required: ""
    },
    {
      name: "image",
      label: "Image Link:",
      required: ""
    }];
      
  res.render("newSandwich", 
  {
    fields,
    userId: req.session.user_id, 
    loggedIn: req.session.logged_in,
  });
})





module.exports = router;
