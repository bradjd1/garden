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
    Garden.findAll({ order: [['year','desc']] }).then((gardens) => {
      res.render("showgarden.ejs", {
        gardens: gardens,
      });
    });
  });

//create new garden
router.get("/new", (req, res) => {
    res.render('newgarden.ejs');
})
//create new garden
  router.post("/", (req, res) => {
    Garden.create(req.body).then((newGarden) => {
        res.redirect('/gardens');
    });
});


// find garden for edit
router.get('/:id', (req, res) => {
  Garden.findByPk(req.params.id).then((garden) => {
      console.log('in get id',garden,req.params.id);
      res.render('editgarden.ejs', {
          garden: garden,
          id: req.params.id
      });
  });
});

//edit garden
router.put('/:id', (req, res) => {
  console.log('in put garden',req.params)
  Garden.update(req.body, {
      where: { id: req.params.id },
      returning: true,
  }).then((garden) => {
      res.redirect('/gardens');
  });
})

router.delete('/:id', (req,res) => {
  Garden.destroy({ where: { id: req.params.id } }).then(() => {
      res.redirect("/gardens");
    });
  });
module.exports=router;