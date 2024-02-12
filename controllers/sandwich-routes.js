const express = require("express");
const router = express.Router();
const { User, Rating, Sandwich } = require("../models");
const sequelize = require("../config/connection");



router.get("/sandwich/test", async (req, res) => {
    res.render("sandwich");
});



router.get("/allSandwiches", async (req, res) => {
    try {
        const sandwiches = await Sandwich.findAll(); 
        console.log(sandwiches)
        const cleanSandwiches = sandwiches.map((sandwich) => {
            return sandwich.get({plain:true})
        })
        console.log(cleanSandwiches)
        res.render("allSandwiches", { cleanSandwiches }); 
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
            res.render("searchResult", { sandwich: cleanSandwich });
        } else {
            res.render("searchResult", { message: "No sandwich found for the given term." });
        }
    } catch (error) {
        console.error("Error searching for sandwich:", error);
        res.status(500).send("Internal Server Error");
    }
});





module.exports = router;
