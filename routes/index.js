const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});
//If I use separate js files for routes, do not work. All in index.js works
router.get('/celebrities', (req, res, next) => {
  //res.send('celebrities page');
  Celebrity.find()
    .then((celebrities) => {
      res.render('celebrities/index', { celebrities });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
