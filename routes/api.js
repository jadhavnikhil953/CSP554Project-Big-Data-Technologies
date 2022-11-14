// Dependencies
var express = require('express');
var router = express.Router();
const Posts = require ( '../backend/models/post');
const Orders = require('../backend/models/orders')


// Routes
router.post('/products',(req, res) => {
   //console.log(req.body);
   Posts.find({postName:req.body.postName}, (error, result) => {
      if(error) {
          return res.status(500).send(error);
      }
      res.send(result);
  });
});

router.post('/mapReduce',(req, res) => {
    //console.log(req.body);
    Posts.find({postName:req.body.postName}, (error, result) => {
       if(error) {
           return res.status(500).send(error);
       }
       res.send(result);
   });
 });

 router.post('/getAllOrders',(req, res) => {
    //console.log(req.body);
    Orders.find({}, (error, result) => {
       if(error) {
           return res.status(500).send(error);
       }
       res.send(result);
   });
 });

// Return router
module.exports = router;