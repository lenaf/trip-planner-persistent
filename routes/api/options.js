
//maybe use router here?

var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models').Hotel;
var Restaurants = require('../../models').Restaurant;
var Activity = require('../../models').Activity;

// router.get('hotels', function(req, res, next){
//     console.log("HELLO!");
//     Hotel.findAll()
//     .then(function(foundHotels){
//         res.json(foundHotels);
//     }).catch(next);
// });

module.exports = router;