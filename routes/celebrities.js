const express = require('express');
const celebRouter = express.Router();
const Celebrity = require('../models/celebrity');

//If I use separate js files for routes, do not work. All in index.js works
// Handle GET request for website root
/*
  celebRouter.get('/celebrities', (req, res, next) => {
  res.send('celebrities page')
  res.render('celebrities/index');
  Celebrity.find()
    .then(resources => {
      res.render('home', { resources });
    })
    .catch(error => {
      next(error);
    });
  });
*/

module.exports = celebRouter;
