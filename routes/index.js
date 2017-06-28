//require in all our express stuff and our models
var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;


//route to get our hotels model
router.get('/api/hotels', function (req, res, next) {
  Hotel.findAll()
    .then(function (foundHotels) {
      res.json(foundHotels);
    }).catch(next);
});


//route to get our restaurants model
router.get('/api/restaurants', function (req, res, next) {
  Restaurant.findAll()
    .then(function (foundRestaurants) {
      res.json(foundRestaurants);
    }).catch(next);
});

//route to get our activities model
router.get('/api/activities', function (req, res, next) {
  Activity.findAll()
    .then(function (foundActivities) {
      res.json(foundActivities);
    }).catch(next);
});

// route to get all days
router.get('/api/days', function (req, res, next) {
  res.send('You got all the days!');
});

// route to get one specific day by id
router.get('/api/days/:id', function (req, res, next) {

});

// route to delete a specific day by id
router.delete('/api/days/:id', function (req, res, next) {

});

// route to create a new day
router.post('/api/days', function () {
  Day.create({
    number: 1
  })
  .then(function(newDay){
    res.json(newDay)
  })
});

// route to add an attraction for a specific day
router.post('/api/days/:id/:attraction', function (req, res, next) {

});

// route to delete an attraction for a specific day
router.delete('/api/days/:id/:attraction', function (req, res, next) {

});

//route to get our main page
router.get('/', function (req, res, next) {
  res.render('index');
  // Promise.all([
  //   Hotel.findAll(),
  //   Restaurant.findAll(),
  //   Activity.findAll()
  // ])
  //   .spread(function (dbHotels, dbRestaurants, dbActivities) {
  //     res.render('index', {
  //       // edit the model imports using AJAX
  //       // templateHotels: dbHotels,
  //       // templateRestaurants: dbRestaurants,
  //       // templateActivities: dbActivities
  //     });
  //   })
  //   .catch(next);
});

module.exports = router;
