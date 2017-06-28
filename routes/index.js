var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;

// router.use('/api', require('./api/options'));

router.get('/api/hotels', function(req, res, next){
    console.log("HELLO!");
    Hotel.findAll()
    .then(function(foundHotels){
        res.json(foundHotels);
    }).catch(next);
});

router.get('/api/restaurants', function(req, res, next){
    console.log("HELLO!");
    Restaurant.findAll()
    .then(function(foundRestaurants){
        res.json(foundRestaurants);
    }).catch(next);
});

router.get('/api/activities', function(req, res, next){
    console.log("HELLO!");
    Activity.findAll()
    .then(function(foundActivities){
        res.json(foundActivities);
    }).catch(next);
});

router.get('/', function(req, res, next) {
  Promise.all([
    Hotel.findAll(),
    Restaurant.findAll(),
    Activity.findAll()
  ])
  .spread(function(dbHotels, dbRestaurants, dbActivities) {
    res.render('index', {
      // edit the model imports using AJAX
      // templateHotels: dbHotels,
      // templateRestaurants: dbRestaurants,
      // templateActivities: dbActivities
    });
  })
  .catch(next);
});

module.exports = router;
