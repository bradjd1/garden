//importing express to file
const express = require('express');
//instantiating our router
const router = express.Router();

const Seed = require('../models').Seed;

//show a list of all seeds
router.get("/", (req, res) => {
    Seed.findAll({ order: ['id'] }).then((seeds) => {
      res.render("showseeds.ejs", {
        seeds: seeds,
      });
    });
  });

//create new seed 
router.get("/new", (req, res) => {
    res.render('newseed.ejs');
})
//create new seed
  router.post("/new", (req, res) => {
    Seed.create(req.body).then((newSeed) => {
        res.redirect('/seeds');
    });
});
module.exports=router;