//importing express to file
const express = require('express');
//instantiating our router
const router = express.Router();

const Garden = require('../models').Garden;    //need to make it available to the router
const Seed = require('../models').Seed;

//load initial landing page
// router.get("/", (req, res) => {
//     Garden.findAll({ order: ['id'] }).then((gardens) => {
//       res.render("gardenIndex.ejs", {
//         gardens: gardens,
//       });
//     });
//   });

router.get("/", (req, res) => {
    Garden.findAll({ order: ['id'] }).then((gardens) => {
      res.render("showgarden.ejs", {
        gardens: gardens,
      });
    });
  });

//create new garden - do I need a subfolder?
router.get("/new", (req, res) => {
    res.render('newgarden.ejs');
})
//create new garden
  router.post("/new", (req, res) => {
    Garden.create(req.body).then((newGarden) => {
        res.redirect('/gardens');
    });
});

module.exports=router;