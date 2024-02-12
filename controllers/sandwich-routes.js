const router = require("express").Router();
const { User, Rating, Sandwich } = require("../models");
const sequelize = require("../config/connection");

/*create a get all sandwich route*/

router.get('/', async (req, res) => {
  const sammichData = await Sandwich.findAll().catch((err) => {
    res.json(err);
  });
  res.json(sammichData);
});

/*get name route*/
router.get('/:name', (req, res) => {
    Sandwich.findOne(
      {
        where: { 
          name: req.params.name 
        },
      }
    ).then((sammichData) => {
      // const sammy = sammichData.get({plain: true})
      res.json(sammichData);
      // res.render("", {sammy})
    });
  });
  

/*create a sign up route   */

router.get("/test", async (req, res) => {
    res.render("sandwich");
}
);


router.get("/sandwiches/test", async (req, res) => {
    res.render("allSandwiches");
}
);

module.exports = router;