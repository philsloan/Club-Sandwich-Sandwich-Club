const router = require("express").Router();
const { User, Rating, Sandwich } = require("../models");
const sequelize = require("../config/connection");

/*  */


/*  */

router.get("/sandwich/test", async (req, res) => {
    res.render("sandwich");
}
);


router.get("/sandwiches/test", async (req, res) => {
    res.render("allSandwiches");
}
);

module.exports = router;