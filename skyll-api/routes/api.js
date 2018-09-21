const express = require ('express');
const router = express.Router();
const Persons=require('../models/persons');
const Carousels=require('../models/carousels');
const Modules=require('../models/modules');
const Testimoniasl=require('../models/testimonials');
const Application =require('../models/application');
const ContactUs=require('../models/contactus');
const BasicForm=require('../models/basicform');
require('mongoose-query-random');


// get a list of ninjas from the db
router.get('/persons', function(req, res,next){
   Persons.find({}).then(function(ninjas){
       res.send(ninjas);
   })
});
router.get('/persons/:id', function(req, res ,next){
    Persons.findById({_id:req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});
router.get('/carousels', function(req, res,next) {
    Carousels.find().random(3, true, function(err, ninjacaro) {
  res.send(ninjacaro);
    })
});
// router.get('/carousels', function(req, res,next) {
//     Carousels.find({}).then(function(ninjacaro) {
//   res.send(ninjacaro);
//     })
// });

router.get('/modules',function(req,res,next){
Modules.find({}).then(function(moduleninja){
res.send(moduleninja);
})
});
router.get('/testimonials',function(req,res,next){
Testimoniasl.find({}).then(function(testimonialninja){
    res.send(testimonialninja);
})
});
router.post('/application',function(req,res,next){
    Application.create(req.body).then(function(ninja){
        res.send("registered succesfully");

    })
});
router.post('/contactus',function(req,res,next){
    ContactUs.create(req.body).then(function(ninja){
        res.send("message sent");
    })
});
router.post('/basicapplication',function(req,res,next){
    BasicForm.create(req.body).then(function(ninja){
        res.send("registered succesfully");

    })
});


module.exports = router;