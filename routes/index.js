var express = require('express');
var router = express.Router();

var slides = [];
slides.push({
  imagesrc: '/images/Projects/nyucms-site.jpg',
  title: "Chinese Mei Society at NYU's Website",
  description: "A website custom made for Chinese Mei Society, one of New York University's oldest asian cultural organizations on campus with over 1200 members. Inspired by Squarespace's Forte theme. Built with HTML, CSS (Foundation), and JavaScript (Node.js).",
  links: [
    {text: 'More Info on GitHub', link: 'https://github.com/ericapeng/nyucms-site'},
    {text: 'Deployed Site', link: 'http://www.nyucms.org/'}
  ]
});
slides.push({
  imagesrc: '/images/Projects/ideahub.jpg',
  title: 'IdeaHub',
  description: "People often have ideas they believe can bloom into successful businesses, but lack the resources to take the first step. IdeaHub is a single place where users can see how successful their idea might be, find team members, and get advice from other experienced entrepreneurs! This was my final project for NYU's Fall 2016 Applied Internet Technologies course.",
  links: [
    {text: 'More Info on GitHub', link: 'https://github.com/ericapeng/IdeaHub'}
  ]
});
slides.push({
  imagesrc: '/images/Projects/darumaotoshi.jpg',
  title: "Daruma Otoshi Simulator Game",
  description: "A virtual simulation of the Japanese children's game, daruma otoshi. Daruma Otoshi is a single-player game where the player is given a tower of stacked cylindrical blocks and a hammer. The player then has to knock out all the blocks from underneath the top block one-by-one until the top block is on the table, without letting the tower fall over. This was my final project for NYU's Graduate Computer Graphics course of Fall 2016.",
  links: [
    {text: 'More Info on GitHub', link: 'https://github.com/ericapeng/daruma-simulator-game'}
  ]
});
slides.push({
  imagesrc: '/images/Projects/ericapeng-site.jpg',
  title: "This Website",
  description: "A personal site to display my work. Built with HTML, CSS (Bootstrap), and JavaScript (Node.js).",
  links: [
    {text: 'More Info on GitHub', link: 'https://github.com/ericapeng/ericapeng-site'}
  ]
});

var photos = [
  '/images/Patisserie/gateau.jpg',
  '/images/Patisserie/macaron.jpg',
  '/images/Patisserie/bachelorette.jpg',
  '/images/Patisserie/choux.jpg',
  '/images/Patisserie/souffle.jpg',
  '/images/Patisserie/tea_party1.jpg',
  '/images/Patisserie/tea_party2.jpg'
];

router.get('/', function(req, res, next) {
  res.render('home');
});

router.get('/about', function(req, res, next) {
  res.render('about', {about: true});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {projects: true, slides: slides});
});

router.get('/photography', function(req, res, next) {
  res.render('photography', {photography: true});
});

router.get('/patisserie', function(req, res, next) {
  res.render('patisserie', {patisserie: true, photos: photos});
});

module.exports = router;
