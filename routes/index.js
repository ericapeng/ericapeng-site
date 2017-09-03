var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about', {about: true});
});

router.get('/projects', function(req, res, next) {

});

module.exports = router;
