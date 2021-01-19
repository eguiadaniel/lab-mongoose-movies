const express = require('express');
const router = express.Router();

// Handle GET request for website root
router.get('/', (req, res, next) => {
  res.render('index');
});

// Handle GET request for website root
router.get('/celebrities', (req, res, next) => {
  res.send('celebrities page');
});

module.exports = router;
