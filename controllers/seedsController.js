//importing express to file
const express = require('express');
//instantiating our router
const router = express.Router();

const Seed = require('../models').Seed;
const Garden = require('../models').Garden;

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
router.post("/", (req, res) => {
    Seed.create(req.body).then((newSeed) => {
        res.redirect('/seeds');
    });
});

// find seed for edit
// router.get('/:id', (req, res) => {
//     Seed.findByPk(req.params.id).then((seed) => {
//         console.log('in get id',seed,req.params.id);
//         res.render('editseed.ejs', {
//             seed: seed,
//             id: req.params.id
//         });
//     });
// });

// find seed for edit
router.get("/:id", (req, res) => {
    Seed.findByPk(req.params.id, {
      include: [{
        model: Garden,
        attributes: ['id','year','notes']
      },]
    }).then((seed) => {
      // if we did a console.log of fruit here we would see the user data is included
      //console.log('in get id',seed,req.params.id);
      res.render('editseed.ejs', {
          seed: seed,
          id: req.params.id
      });
    });
  });
  
//edit seed
router.put('/:id', (req, res) => {
    //console.log('in put seed',req.params)
    Seed.update(req.body, {
        where: { id: req.params.id },
        returning: true,
    }).then((seed) => {
        res.redirect('/seeds');
    });
})

router.delete('/:id', (req,res) => {
    Seed.destroy({ where: { id: req.params.id } }).then(() => {
        res.redirect("/seeds");
      });
    });

module.exports = router;