var express = require('express');
var router = express.Router();

// define the home page route
router.get('/', function(req, res) {
  res.send('Casa home page');
});
// define the about route
router.get('/about', function (req, res) {

    //json with home info
  res.send('About Casa');
});

router.get('/info', function (req, res) {

    //json with home info
    res.send('Info Casa');
});

module.exports = router;
